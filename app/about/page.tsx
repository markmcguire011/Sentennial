import Image from "next/image";
import Newsletter from "@/components/sections/newsletter";

export default function Page() {
  const projectStatuses = [
    {
      name: "Development",
      status: "active",
      focus: "Alexandria Repository",
      color: "bg-green-400",
    },
    {
      name: "Research",
      status: "active",
      focus: "Ethics of AI",
      color: "bg-blue-400",
    },
    {
      name: "Writing",
      status: "paused",
      focus: "New article series on ML Ethics",
      color: "bg-yellow-400",
    },
  ];

  const currentlyReading = [
    {
      title: "Notes from the Underground",
      author: "Fyodor Dostoevsky",
      progress: 65,
      emoji: "📝",
      color: "bg-blue-100",
    },
    {
      title: "Citizens: A Chronicle of the French Revolution",
      author: "Simon Schama",
      progress: 12,
      emoji: "🇫🇷",
      color: "bg-purple-100",
    },
  ];

  const readingQueue = [
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      emoji: "📖",
      color: "bg-amber-100",
    },
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      emoji: "🧩",
      color: "bg-green-100",
    },
    {
      title: "The Age of AI",
      author: "Henry Kissinger, Eric Schmidt, Daniel Huttenlocher",
      emoji: "🧠",
      color: "bg-blue-100",
    },
  ];

  return (
    <div className="flex flex-col justify-center max-w-[1200px] px-[calc(8vw)] mx-auto text-black">
      <div className="flex flex-col py-16 md:py-20">
        <h1 className="text-4xl md:text-6xl pb-6 md:pb-10 font-bold opacity-75 text-brand-dark">
          About.
        </h1>
        <p className="text-base md:text-lg text-brand-dark">
          Hey I&apos;m Mark! This is a personal project/blog where I record
          thoughts and stories about various topics. You already knew that, but
          something you didn&apos;t know, the name of this project. It&apos;s a
          combination of{" "}
          <strong className="opacity-100 font-semibold text-brand-color">
            Sentient
          </strong>{" "}
          and{" "}
          <strong className="font-semibold text-brand-dark">Centennial</strong>.
          Sentience: I think is just a super intriguing topic, mysterious but
          also deeply personal. Centennial: Relates to time, history,
          experience, and celebration. It blends a lot of relevant themes and I
          thought it sounded cool.
        </p>

        <div className="mt-8 md:mt-10 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
            Development Status
          </h2>
          <p className="mt-2 mb-4 text-base md:text-lg opacity-75">
            Here&apos;s what I&apos;m currently working on for this project:
          </p>
        </div>

        <div className="pb-4 md:pb-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projectStatuses.map((status) => (
            <div
              key={status.name}
              className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg p-4 border"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 ${status.color} rounded-full ${
                    status.status === "active" ? "animate-pulse" : "opacity-50"
                  }`}
                />
                <span className="text-brand-dark opacity-75">
                  {status.name}
                </span>
              </div>
              <div className="mt-2 text-xs text-brand-dark opacity-50">
                {status.status === "paused" ? "Paused: " : "Current focus: "}
                {status.focus}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
            Life Things
          </h2>
          <div className="mt-2 text-base md:text-lg color-brand-dark space-y-4">
            <p>
              Currently, I&apos;m studying computer science at Cal Poly SLO.
              I&apos;m super passionate about CS, as well as history and
              philosophy, which are also huge interests of mine.
            </p>
            <p>
              In the field of computer science, ML/AI really interests me the
              most. But more generally, I just enjoy the struggle to learn how
              things work, and the act of problem solving and creation through
              technology.
            </p>
            <p>
              History and philosophy are arguably bigger interests though, and I
              get a special feeling from untangling the connections between
              them. Within these two, ethics and the philosophy of mind are
              probably the most interesting, as well as the French Revolution
              and the Enlightenment.
            </p>
            <p>
              Apart from that, I stay pretty active. I love basketball, running,
              swimming, and going to the gym. I also really love cities, space,
              and the human spirit.
            </p>
          </div>
        </div>

        {/* New Reading Section */}
        <div className="mt-8 md:mt-10 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
            My Bookshelf
          </h2>
          <p className="mt-2 mb-4 text-base md:text-lg opacity-75">
            I spend a lot of time reading and trying to learn about
            all the awesome stuff we as humans have created, shaped, and have
            yet to build. You learn a lot about yourself through the act of
            reading, so here&apos;s what&apos;s currently on my list:
          </p>
        </div>

        {/* Currently Reading */}
        <div className="mb-6">
          <h3 className="text-lg font-medium opacity-75 text-brand-dark mb-3">
            Currently Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentlyReading.map((book) => (
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

        {/* Reading Queue */}
        <div className="mb-6">
          <h3 className="text-lg font-medium opacity-75 text-brand-dark mb-3">
            Reading Queue
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {readingQueue.map((book) => (
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

        <div className="mt-8 md:mt-10 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
            Random Fun Facts
          </h2>
          <div className="flex flex-col gap-3 py-3 md:py-4">
            <div className="group flex items-center gap-3 transition-all">
              <div className="h-2 w-2 rounded-full bg-brand-color/75 group-hover:bg-brand-color transition-colors"></div>
              <p className="text-base md:text-lg color-brand-dark group-hover:translate-x-1 transition-transform">
                Favorite sound: Construction or tires on a wet road
              </p>
            </div>
            <div className="group flex items-center gap-3 transition-all">
              <div className="h-2 w-2 rounded-full bg-brand-color/75 group-hover:bg-brand-color transition-colors"></div>
              <p className="text-base md:text-lg color-brand-dark group-hover:translate-x-1 transition-transform">
                Favorite art genre: Baroque or High Renaissance
              </p>
            </div>
            <div className="group flex items-center gap-3 transition-all">
              <div className="h-2 w-2 rounded-full bg-brand-color/75 group-hover:bg-brand-color transition-colors"></div>
              <p className="text-base md:text-lg color-brand-dark group-hover:translate-x-1 transition-transform">
                Favorite trinket: The clock
              </p>
            </div>
            <div className="group flex items-center gap-3 transition-all">
              <div className="h-2 w-2 rounded-full bg-brand-color/75 group-hover:bg-brand-color transition-colors"></div>
              <p className="text-base md:text-lg color-brand-dark group-hover:translate-x-1 transition-transform">
                Favorite number: 9
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold opacity-75 text-brand-dark">
            Building Photos
          </h2>
          <p className="mt-2 mb-4 text-base md:text-lg opacity-75">
            Some very cool building photos from NYC:
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10 items-center justify-center">
          <div className="relative group overflow-hidden rounded-md border shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/articles/alien_building.JPG"
              width={300}
              height={600}
              alt="Alien building"
              className="rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-md border shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/about/habitat_building.JPG"
              width={300}
              height={600}
              alt="Habitat building"
              className="rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-md border shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/about/trellis_building.JPG"
              width={300}
              height={600}
              alt="Trellis building"
              className="rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-md border shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/about/ornate_building.JPG"
              width={300}
              height={600}
              alt="Ornate building"
              className="rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-md border shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/about/pod_building.JPG"
              width={300}
              height={600}
              alt="Pod building"
              className="rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <p className="text-center py-4 md:py-5 text-brand-dark text-base md:text-lg">
          (These are all from a recent trip to NYC)
        </p>

        {/* Newsletter Section */}
        <Newsletter />
      </div>
    </div>
  );
}
