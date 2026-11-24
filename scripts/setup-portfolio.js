const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "src", "app", "data");
const targetPath = path.join(dataDir, "portfolio.ts");
const examplePath = path.join(dataDir, "portfolio.example.ts");

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 1. If PORTFOLIO_DATA_JSON env var is set (e.g. in Vercel), generate portfolio.ts from it
if (process.env.PORTFOLIO_DATA_JSON) {
  try {
    const parsed = JSON.parse(process.env.PORTFOLIO_DATA_JSON);
    const content = `// Generated automatically from PORTFOLIO_DATA_JSON environment variable\nexport const portfolioData = ${JSON.stringify(parsed, null, 2)};\n`;
    fs.writeFileSync(targetPath, content, "utf8");
    console.log("Successfully generated portfolio.ts from PORTFOLIO_DATA_JSON");
    process.exit(0);
  } catch (err) {
    console.warn("Failed to parse PORTFOLIO_DATA_JSON, falling back to file check:", err.message);
  }
}

// 2. If portfolio.ts already exists (e.g. locally), do nothing
if (fs.existsSync(targetPath)) {
  process.exit(0);
}

// 3. Fallback: Copy portfolio.example.ts to portfolio.ts if missing
if (fs.existsSync(examplePath)) {
  fs.copyFileSync(examplePath, targetPath);
  console.log("Created fallback portfolio.ts from portfolio.example.ts");
} else {
  console.warn("Warning: Neither portfolio.ts nor portfolio.example.ts was found.");
}
