import Image from "next/image";
import { Musing } from "@/interfaces/musing";
import FeaturedMusing from "@/components/content/musings/featured-musing";

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

      {featuredMusing && <FeaturedMusing musing={featuredMusing} />}
    </div>
  );
}
