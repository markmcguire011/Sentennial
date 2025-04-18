import Image from "next/image";
import Link from "next/link";
import { Musing } from "@/interfaces/musing";

type Props = {
  featuredMusing?: Musing;
};

export default function MusingsHeader({ featuredMusing }: Props) {
  return (
    <div className="pt-20 pb-10">
      <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
        <div className="pr-10 max-w-[825px]">
          <h1 className="text-6xl pb-10 font-bold opacity-75 text-brand-dark">
            Musings.
          </h1>
          <p className="text-xl opacity-75 color-brand-dark pb-6">
            <b className="font-semibold">
              Short reflections loosely based on occurences.{" "}
            </b>
            These are mostly random thoughts or lines-of-thought that are
            inspired by the world, by other people, or just boredom.
          </p>
        </div>
        <div>
          <Image
            src="/musings/palace_garden.JPG"
            width={400}
            height={600}
            alt="Some very contemplating-looking gardens"
            className="rounded-md"
          />
        </div>
      </div>

      {featuredMusing && (
        <div className="group mt-12 bg-transparent p-8 rounded-sm shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
          <div className="flex items-center mb-5">
            <div className="flex items-center relative border border-dashed border-brand-color/75 py-2 px-4 bg-brand-color/10">
              <h2 className="text-lg font-semibold text-brand-dark/75">
                Featured
                <span className="text-brand-color">.</span>
              </h2>
            </div>
            <div className="ml-auto flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#9ad4bc]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffda89]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f1adaf]"></div>
            </div>
          </div>

          <Link href={`/musings/${featuredMusing.slug}`} className="block">
            <div className="transition-all duration-200">
              <h3 className="text-2xl font-semibold text-brand-dark/75 group-hover:text-brand-color mb-3 transition-all duration-200">
                {featuredMusing.title}
              </h3>

              <div className="flex items-start gap-6 mt-4">
                <div className="w-full">
                  <div className="p-4 bg-gray-50 border border-dashed border-gray-200 rounded-md mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed font-mono">
                      {featuredMusing.excerpt ||
                        "Read this featured reflection..."}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm bg-[#9dc8db]/20 text-[#9dc8db]/80 py-1 px-3 rounded-full font-mono">
                      <span className="md:inline hidden">
                        {featuredMusing.date}
                      </span>
                      <span className="md:hidden inline">
                        {new Date(featuredMusing.comp_date)
                          .toLocaleDateString("en-US", {
                            month: "2-digit",
                            day: "2-digit",
                            year: "2-digit",
                          })
                          .replace(/\//g, ".")}
                      </span>
                    </span>
                    <span className="text-brand-color font-medium group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
