"use client";

import { useEffect } from "react";

export default function FootnoteHandler() {
  useEffect(() => {
    // Handle footnote clicks
    const handleFootnoteClick = (e: MouseEvent) => {
      // Find the closest anchor element (in case the click is on a child element)
      let target = e.target as HTMLElement;
      while (target && target.tagName !== "A") {
        target = target.parentElement as HTMLElement;
        if (!target) return;
      }

      // Check if it's a footnote link
      const isFootnoteLink =
        target.hasAttribute("data-footnote-link") ||
        target.getAttribute("href")?.startsWith("#user-content-fn") ||
        target.getAttribute("href")?.startsWith("#user-content-fnref");

      if (isFootnoteLink) {
        e.preventDefault();
        const href = target.getAttribute("href")!;
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Calculate position to scroll to (centered in viewport)
          const viewportHeight = window.innerHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - viewportHeight / 3; // Position 1/3 from the top

          // Smooth scroll to the calculated position
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listener
    document.addEventListener("click", handleFootnoteClick);

    // Clean up
    return () => {
      document.removeEventListener("click", handleFootnoteClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
