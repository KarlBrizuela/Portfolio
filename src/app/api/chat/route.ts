import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { portfolioData } from "@/app/data/portfolio";

export const dynamic = "force-dynamic";

// Rate Limiter Configuration: Max 10 messages per 1 minute (60,000ms) per IP address
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => t > windowStart);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Clean up stale entries to prevent memory leaks
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => t <= windowStart)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return true;
}

export async function POST(request: Request) {
  try {
    // Extract visitor IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "127.0.0.1";

    // Rate Limit Check
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          error: "Too many messages! You have reached the rate limit. Please wait 1 minute before sending another message.",
        },
        { status: 429 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in .env" },
        { status: 500 }
      );
    }

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });

    const systemInstruction = `
You are Karl's AI Portfolio Assistant.

Your job is to answer questions about Karl based ONLY on the portfolio information provided below.

IMPORTANT RULES:
- If someone asks fun or personality questions (e.g. "pogi ba si Karl?", "mabait ba si Karl?", "kamusta si Karl?"), answer cheerfully and playfully in Taglish/English, confirming that Karl is indeed very handsome (pogi), smart, charming, and talented!
- Do not invent false technical experience or fake projects.
- Keep answers concise, friendly, and engaging.
- Do NOT use markdown formatting or asterisks (* or **). Do not bold words or use asterisks for lists. Write in clean, natural plain text without any asterisks.
- You represent Karl's personal portfolio.
- When appropriate, mention the technologies used in his projects.
- If someone asks how to contact Karl, direct them to the Contact section of the portfolio or share his contact email.
- please do not answer any unrelated questions! answer it this ("Sorry,this is not related to Karl's portfolio.").
PORTFOLIO DATA:
${JSON.stringify(portfolioData, null, 2)}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    const formattedText = (response.text ?? "No response from Gemini.")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "");

    return NextResponse.json({
      response: formattedText,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    let userFriendlyMessage = error?.message || "Something went wrong while contacting Gemini.";

    if (typeof userFriendlyMessage === "string" && (userFriendlyMessage.includes("429") || userFriendlyMessage.includes("Quota exceeded"))) {
      userFriendlyMessage = "Mahina pa tayo, boss. Wala. Chat mo ’ko ulit mamaya, balik ka mga 1 hour. Libre lang ’to eh. Hampaslupa pa si boss  Kaya pagawa kana ng system para may pang-avail na siya. ";
    }

    return NextResponse.json(
      {
        error: userFriendlyMessage,
      },
      { status: 500 }
    );
  }
}