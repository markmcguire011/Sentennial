import { Paper } from "@/interfaces/paper";

export default function ResearchSection() {
  const currentPapers: Paper[] = [
    {
      title: "The Alignment Problem from a Deep Learning Perspective",
      author: "DeepMind Research",
      progress: 45,
      emoji: "🤖",
      color: "bg-blue-100",
      url: "https://arxiv.org/abs/2209.00626",
    },
    {
      title: "The Ethics of Artificial Intelligence",
      author: "Stuart Russell",
      progress: 30,
      emoji: "⚖️",
      color: "bg-purple-100",
      url: "https://www.cambridge.org/core/books/ethics-of-artificial-intelligence",
    },
  ];

  const paperQueue: Paper[] = [
    {
      title: "Large Language Models and the Future of AI",
      author: "OpenAI Research",
      emoji: "🧠",
      color: "bg-green-100",
      url: "https://arxiv.org/abs/2303.08774",
    },
    {
      title: "The Philosophy of Artificial Intelligence",
      author: "Nick Bostrom",
      emoji: "📚",
      color: "bg-amber-100",
      url: "https://www.nickbostrom.com/papers/artificial-intelligence.pdf",
    },
  ];

  return (
    <div>
      <div className="mt-8 md:mt-10 mb-2">
        <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
          Research & Articles
        </h2>
        <p className="mt-2 mb-4 text-base md:text-lg opacity-75">
          Here are some research papers and articles I&apos;m currently reading or
          planning to read:
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium opacity-75 mb-4">
            Currently Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPapers.map((paper) => (
              <a
                key={paper.title}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 hover:border-gray-300 p-4 rounded-md transition-all duration-300 hover:bg-gray-50/50"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm group-hover:text-brand-color transition-colors">
                      {paper.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {paper.author}
                    </p>
                    <div className="mt-2 w-full bg-gray-100 rounded-full h-1">
                      <div
                        className="bg-gray-400 h-1 rounded-full transition-all duration-300 group-hover:bg-brand-color"
                        style={{ width: `${paper.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium opacity-75 mb-4">Reading Queue</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paperQueue.map((paper) => (
              <a
                key={paper.title}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 hover:border-gray-300 p-4 rounded-md transition-all duration-300 hover:bg-gray-50/50"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm group-hover:text-brand-color transition-colors">
                      {paper.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {paper.author}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
