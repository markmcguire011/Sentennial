import Library from "@/components/sections/library";
import LibraryWIP from "@/components/sections/library-wip";

export default function Page() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto text-black">
      <div className="pt-20 pb-10 px-[calc(8vw)]">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold opacity-75 text-brand-dark">
            Alexandria. <span className="text-2xl align-top">[α]</span>
          </h1>
          <p className="text-xl opacity-75 max-w-2xl">
            A curated collection of books that shape my thinking, from
            philosophy to engineering. Part library, part laboratory — where
            ideas meet implementation.
          </p>
        </div>
      </div>
      {/* <Library /> */}
      <LibraryWIP />
    </div>
  );
}
