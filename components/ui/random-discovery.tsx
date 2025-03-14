import { writingQuotes } from "@/data/quotes";

export default function RandomDiscovery() {
  const randomQuote =
    writingQuotes[Math.floor(Math.random() * writingQuotes.length)];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center opacity-[0.15] transform px-8 max-w-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-brand-color rounded-full animate-pulse mr-2" />
            <span className="text-sm font-mono uppercase tracking-wider">
              Random Discovery
            </span>
          </div>
          <div className="border border-brand-color/20 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg mb-3 text-brand-dark font-normal leading-relaxed">
              {randomQuote.text}
            </p>
            <div className="flex items-center justify-end gap-2 text-sm text-brand-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span className="font-mono text-xs opacity-75 tracking-wide">
                {randomQuote.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
    </div>
  );
}
