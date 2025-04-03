// import Library from "@/components/sections/library";
import LibraryWIP from "@/components/sections/library-wip";

export default function Page() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto text-black">
      <div className="pt-20 pb-10 px-[calc(8vw)]">
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
      {/* <Library /> */}
      <LibraryWIP />

      <div className="px-[calc(8vw)] pb-16">
        <div className="mt-8 border-t border-slate-300 pt-12">
          <blockquote className="text-sm font-mono text-brand-dark opacity-45 italic max-w-md mx-auto text-center">
            &quot;The real problem is not whether machines think, but whether
            men do.&quot;
            <footer className="mt-2 opacity-75 text-xs">
              —B.F. Skinner
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
