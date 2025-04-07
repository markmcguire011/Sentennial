/**
 * Script to calculate reading time for articles
 *
 * Usage:
 * - Process a single file: ts-node scripts/calculate-read-time.ts content/articles/my-article.mdx
 * - Process all articles: ts-node scripts/calculate-read-time.ts --all
 * - Update frontmatter: ts-node scripts/calculate-read-time.ts --all --update
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const WORDS_PER_MINUTE = 200; // average reading speed
const CONTENT_DIR = path.join(process.cwd(), "posts");
const ARTICLES_DIR = path.join(CONTENT_DIR, "articles");

function countWords(text: string): number {
  // remove code blocks
  const textWithoutCodeBlocks = text.replace(/```[\s\S]*?```/g, "");

  // Remove formatting
  const cleanText = textWithoutCodeBlocks
    .replace(/#+\s+(.*)/g, "$1") //  headings
    .replace(/!\[.*\]\(.*\)/g, "") // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // italic
    .replace(/~~(.*?)~~/g, "$1") // strikethrough
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/\s+/g, " ") // normalize whitespace
    .trim();

  return cleanText.split(/\s+/).length;
}

// reading time based on word count
function calculateReadTime(wordCount: number): number {
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}

// single file
async function processFile(
  filePath: string,
  updateFrontmatter = false
): Promise<void> {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const wordCount = countWords(content);
    const readTime = calculateReadTime(wordCount);

    console.log(`File: ${path.basename(filePath)}`);
    console.log(`Word count: ${wordCount}`);
    console.log(
      `Estimated read time: ${readTime} minute${readTime !== 1 ? "s" : ""}`
    );

    if (updateFrontmatter) {
      // only update if the read time has changed or doesn't exist
      if (data.readTime !== readTime) {
        data.readTime = readTime;

        const updatedFileContent = matter.stringify(content, data);
        fs.writeFileSync(filePath, updatedFileContent);
        console.log("✅ Updated frontmatter with new read time");
      } else {
        console.log("ℹ️ Read time unchanged, skipping update");
      }
    }

    console.log("---");
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// all article files
async function processAllFiles(updateFrontmatter = false): Promise<void> {
  try {
    const files = await glob(`${ARTICLES_DIR}/**/*.md`);

    if (files.length === 0) {
      console.log(`No .md files found in ${ARTICLES_DIR}`);
      return;
    }

    console.log(`Found ${files.length} article files\n`);

    for (const file of files) {
      await processFile(file, updateFrontmatter);
    }

    console.log(`Processed ${files.length} files`);
    if (updateFrontmatter) {
      console.log("Remember to rebuild your site to see the changes!");
    }
  } catch (error) {
    console.error("Error processing files:", error);
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const updateFrontmatter = args.includes("--update");

  if (args.includes("--all")) {
    await processAllFiles(updateFrontmatter);
  } else if (args.length > 0 && !args[0].startsWith("--")) {
    const filePath = path.resolve(args[0]);
    await processFile(filePath, updateFrontmatter);
  } else {
    console.log(`
Usage:
  ts-node scripts/calculate-read-time.ts <file-path>    Process a single file
  ts-node scripts/calculate-read-time.ts --all          Process all articles
  ts-node scripts/calculate-read-time.ts --all --update Update frontmatter with read times
    `);
  }
}

main().catch(console.error);
