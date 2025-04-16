import Image from "next/image";

export default function ArticlesHeader() {
  return (
    <div className="pt-20 pb-10">
      <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
        <div className="pr-0 md:pr-10 max-w-full md:max-w-[825px]">
          <h1 className="text-5xl md:text-6xl pb-6 md:pb-10 font-bold opacity-75 text-brand-dark">
            Articles.
          </h1>
          <p className="text-lg md:text-xl opacity-75 color-brand-dark pb-6">
            <b className="font-semibold">
              Long-form pieces with coherent themes and messages.{" "}
            </b>
            These are more structured than musings, and usually have a specific
            point or message that I want to convey.
          </p>
          <div className="block md:hidden mb-6">
            <Image
              src="/articles/alien_building.JPG"
              width={400}
              height={600}
              alt="Cool alien-looking building"
              className="rounded-md w-full max-w-[400px] mx-auto"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/articles/alien_building.JPG"
            width={400}
            height={600}
            alt="Cool alien-looking building"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
