type Book = {
  title: string;
  author: string;
  emoji: string;
  color: string;
};

type Props = {
  books: Book[];
};

export default function ReadingQueue({ books }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium opacity-75 text-brand-dark mb-3">
        Reading Queue
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {books.map((book) => (
          <div
            key={book.title}
            className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg p-3 border flex gap-3"
          >
            <div
              className={`w-12 h-16 ${book.color} rounded flex-shrink-0 flex items-center justify-center text-xl`}
            >
              {book.emoji}
            </div>
            <div>
              <h4 className="font-medium text-sm text-brand-dark">
                {book.title}
              </h4>
              <p className="text-xs text-brand-dark opacity-75">
                by {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
