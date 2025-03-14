"use client";

export default function DevStatus() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg p-4 border text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-brand-dark opacity-75">In Development</span>
        </div>
        <div className="mt-2 text-xs text-brand-dark opacity-50">
          Current focus: writing awesome articles
        </div>
      </div>
    </div>
  );
}
