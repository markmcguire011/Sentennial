import { Book } from "@/interfaces/book";

type Props = {
  books: Book[];
};

export default function CurrentlyReading({ books }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium opacity-75 text-brand-dark mb-3">
        Currently Reading
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg p-4 border flex gap-4"
          >
            <div
              className={`w-16 h-24 ${book.color} rounded flex-shrink-0 flex items-center justify-center text-3xl`}
            >
              {book.emoji}
            </div>
            <div className="flex flex-col flex-grow">
              <h4 className="font-medium text-brand-dark">{book.title}</h4>
              <p className="text-sm text-brand-dark opacity-75">
                by {book.author}
              </p>
              <div className="mt-auto pt-2">
                <div className="flex justify-between text-xs opacity-75 mb-1">
                  <span>Progress</span>
                  <span>{book.progress}%</span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-color rounded-full"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
