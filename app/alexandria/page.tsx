// import Library from "@/components/sections/library";
import LibraryWIP from "@/components/sections/library-wip";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-[url('/alexandria/blueprint-grid.svg')] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto text-black">
        {/* Header with architectural elements */}
        <div className="relative pt-20 pb-10 px-[calc(8vw)]">
          {/* Top frieze */}
          <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
            <Image
              src="/alexandria/frieze-blueprint.svg"
              alt="Decorative frieze"
              width={1200}
              height={64}
              className="w-full h-auto opacity-20"
            />
          </div>

          {/* Left column */}
          <div className="absolute left-0 top-16 bottom-0 w-[calc(8vw-10px)] opacity-25 pointer-events-none hidden md:block">
            <div className="sticky top-20">
              <Image
                src="/alexandria/column-blueprint-left.svg"
                alt="Decorative column"
                width={60}
                height={500}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="absolute right-0 top-16 bottom-0 w-[calc(8vw-10px)] opacity-25 pointer-events-none hidden md:block">
            <div className="sticky top-20">
              <Image
                src="/alexandria/column-blueprint-right.svg"
                alt="Decorative column"
                width={60}
                height={500}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="md:text-6xl text-5xl font-bold opacity-75 text-brand-dark">
              Alexandria. <span className="text-2xl align-top">[α]</span>
            </h1>
            <p className="text-xl opacity-75 max-w-2xl">
              An open-access digital repository exploring the philosophical and
              ethical dimensions of artificial intelligence. This is where,
              historical wisdom will meet contemporary challenges in AI
              development. Stay tuned!
            </p>
          </div>
        </div>

        {/* Main content with architectural framing */}
        <div className="relative">
          {/* Blueprint measurement lines */}
          <div className="absolute left-[calc(8vw-20px)] top-0 bottom-0 w-10 opacity-30 pointer-events-none hidden md:block">
            <Image
              src="/alexandria/measurement-vertical.svg"
              alt="Blueprint measurements"
              width={10}
              height={1000}
              className="h-full w-auto"
            />
          </div>
          <div className="absolute right-[calc(8vw-20px)] top-0 bottom-0 w-10 opacity-30 pointer-events-none hidden md:block">
            <Image
              src="/alexandria/measurement-vertical.svg"
              alt="Blueprint measurements"
              width={10}
              height={1000}
              className="h-full w-auto"
            />
          </div>

          <LibraryWIP />
        </div>

        {/* Footer with architectural elements */}
        <div className="relative px-[calc(8vw)] pb-16">
          {/* Bottom architectural element */}
          <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
            <Image
              src="/alexandria/base-blueprint.svg"
              alt="Decorative base"
              width={1200}
              height={80}
              className="w-full h-auto opacity-20"
            />
          </div>

          <div className="mt-8 border-t border-slate-300 pt-12 pb-20">
            <blockquote className="text-sm font-mono text-brand-dark opacity-45 italic max-w-md mx-auto text-center">
              &quot;The real problem is not whether machines think, but whether
              men do.&quot;
              <footer className="mt-2 opacity-75 text-xs">—B.F. Skinner</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
