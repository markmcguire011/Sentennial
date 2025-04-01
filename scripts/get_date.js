/**
 * Script to generate formatted dates for article and musing frontmatter
 *
 * Usage:
 * - Run with no arguments to get current date: node scripts/get_date.js
 * - Run with a specific date: node scripts/get_date.js 2023-05-15
 * - Run with date and time: node scripts/get_date.js "2023-05-15 14:30"
 */

// get date from command line argument or use current date
const inputDate = process.argv[2] ? new Date(process.argv[2]) : new Date();

// check valid
if (isNaN(inputDate.getTime())) {
  console.error(
    'Error: Invalid date format. Please use YYYY-MM-DD or "YYYY-MM-DD HH:MM" format.'
  );
  process.exit(1);
}

// full ISO format with timezone for frontmatter
const formattedDate = inputDate.toISOString();

// human-readable format for reference
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
const readableDate = inputDate.toLocaleDateString("en-US", options);

console.log("\nDate for frontmatter:");
console.log(formattedDate);
console.log("\nHuman-readable date:");
console.log(readableDate);
console.log("");

// copy to clipboard
try {
  const { execSync } = require("child_process");

  if (process.platform === "darwin") {
    // macOS
    execSync(`echo "${formattedDate}" | pbcopy`);
    console.log("✓ Date copied to clipboard!");
  } else if (process.platform === "win32") {
    // Windows
    execSync(`echo ${formattedDate} | clip`);
    console.log("✓ Date copied to clipboard!");
  } else if (process.platform === "linux") {
    // Linux (requires xclip)
    try {
      execSync(`echo "${formattedDate}" | xclip -selection clipboard`);
      console.log("✓ Date copied to clipboard!");
    } catch (e) {
      console.log(
        "Note: Install xclip to enable clipboard functionality on Linux"
      );
    }
  }
} catch (e) {
  console.log("Note: Clipboard operations not supported in this environment");
}
