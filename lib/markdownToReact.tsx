import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import FootnoteHandler from "../components/content/FootnoteHandler";

export default async function markdownToReact(markdown: string) {
  return (
    <>
      <FootnoteHandler />
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          a: ({ node, href, ...props }) => {
            // Handle external links
            const isExternalLink =
              href &&
              (href.startsWith("http://") || href.startsWith("https://"));

            if (isExternalLink) {
              return (
                <a
                  href={href}
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              );
            }

            return <a href={href} {...props} />;
          },
          blockquote: ({ node, className, ...props }) => {
            const combinedClassName = `quote-card ${className || ""}`.trim();
            return <blockquote className={combinedClassName} {...props} />;
          },
        }}
      >
        {markdown}
      </Markdown>
    </>
  );
}
