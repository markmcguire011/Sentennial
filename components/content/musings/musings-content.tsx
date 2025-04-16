import { Musing } from "@/interfaces/musing";

import MusingButton from "@/components/content/musings/musing-button";
import RandomDiscovery from "@/components/ui/random-discovery";
import Random from "@/components/ui/random";

type Props = {
  musings: Musing[];
  allMusings: Musing[];
};

export default function MusingsContent({ musings, allMusings }: Props) {
  return (
    <div className="flex flex-col gap-10 pb-10 min-h-[600px] relative">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold opacity-75 text-brand-dark">
          Latest
        </h1>
        <Random collection={allMusings} type="musing" customStyles="w-auto" />
      </div>
      <div className="flex flex-col gap-7 flex-grow relative">
        {musings.map((musing) => (
          <MusingButton key={musing.slug + "-musing"} data={musing as Musing} />
        ))}
        {musings.length < 3 && <RandomDiscovery />}
      </div>
    </div>
  );
}
