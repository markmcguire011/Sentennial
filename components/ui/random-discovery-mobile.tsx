import { writingQuotes } from "@/data/quotes";

export default function RandomDiscoveryMobile() {
  const randomQuote =
    writingQuotes[Math.floor(Math.random() * writingQuotes.length)];

  return (
    <div className="pointer-events-none my-6">
      <div className="w-full flex items-center justify-center">
        <div className="opacity-[0.15] transform px-4 max-w-full">
          <div className="flex items-center justify-center mb-2">
            <div className="w-1.5 h-1.5 bg-brand-color rounded-full animate-pulse mr-2" />
            <span className="text-xs font-mono uppercase tracking-wider">
              Random Discovery
            </span>
          </div>
          <div className="border border-brand-color/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm mb-2 text-brand-dark font-normal leading-relaxed">
              {randomQuote.text}
            </p>
            <div className="flex items-center justify-end gap-1 text-xs text-brand-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
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
              <span className="font-mono text-[10px] opacity-75 tracking-wide">
                {randomQuote.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
