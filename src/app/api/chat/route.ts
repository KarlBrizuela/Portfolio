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

// Regex Pattern Fallback Engine when Gemini API quota/token runs out
function getFallbackResponse(userMessage: string): string {
  const query = userMessage.toLowerCase();

  // Contact / Socials
  if (/contact|email|phone|number|fb|facebook|ig|instagram|linkedin|github|reach|talk|tawag|sulat|social/i.test(query)) {
    return `Maaari mong kontakin si Karl via Email: ${portfolioData.contact.emails.join(" | ")} o Phone: ${portfolioData.contact.phone.join(" / ")}. Pwede mo rin siyang bisitahin sa Facebook (${portfolioData.contact.socials.facebook}) o Instagram (${portfolioData.contact.socials.instagram}).`;
  }

  // Pogi / Personality / Looks
  if (/pogi|gwapo|handsome|charming|looks|artista|joshua|mabait|ganda/i.test(query)) {
    return `Sobrang pogi ni Karl! ${portfolioData.personality.looks} 100% Pogi at talented Full Stack Developer!`;
  }

  // Girlfriend / Status
  if (/girlfriend|gf|syota|kasintahan|jowa|love|gel|partner/i.test(query)) {
    return `Ang girlfriend ni Karl ay si ${portfolioData.girlfriend}.`;
  }

  // Skills / Tech stack
  if (/skill|tech|stack|language|framework|laravel|react|next|javascript|css|html|programming|code/i.test(query)) {
    return `Ang mga tech skills ni Karl ay: ${portfolioData.skills.techStack.join(", ")}. Soft skills: ${portfolioData.skills.softSkills.join(", ")}.`;
  }

  // Projects / Apps
  if (/project|gawa|system|app|website|work|portfolio/i.test(query)) {
    return `Ilan sa mga nakabuo at kilalang projects ni Karl ay: ${portfolioData.projects.join(", ")}.`;
  }

  // Education / School
  if (/school|university|course|study|degree|student|education|caloocan|aaral|bs/i.test(query)) {
    return `Si Karl ay nag-aaral sa ${portfolioData.education.school} sa kursong ${portfolioData.education.course}.`;
  }

  // Experience / Job / Company
  if (/experience|job|work|company|intracode|developer|position|trabaho|karanasan/i.test(query)) {
    return `Si Karl ay kasalukuyang nagtatrabaho bilang ${portfolioData.experience.position} sa ${portfolioData.experience.company} (${portfolioData.experience.years}).`;
  }

  // Default fallback when API is rate limited
  return `Hi! Ako ang AI Assistant ni Karl. Si Karl Christian Magno Brizuela ay isang Full Stack Developer, Freelancer, at Project Manager. Pwede mo akong tanungin tungkol sa kanyang skills, projects, o contact details!`;
}

export async function POST(request: Request) {
  let message = "";

  try {
    // Extract visitor IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "127.0.0.1";

    // Rate Limit Check per visitor IP
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          error: "Too many messages! You have reached the rate limit. Please wait 1 minute before sending another message.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    message = body.message || "";

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      const fallback = getFallbackResponse(message);
      return NextResponse.json({ response: fallback });
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

    // Fallback to local Regex Pattern engine if Gemini API hits quota error (429) or fails
    const fallbackText = getFallbackResponse(message);
    return NextResponse.json({ response: fallbackText });
  }
}