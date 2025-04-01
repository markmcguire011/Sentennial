import Musings from "@/components/content/musings";
import { Musing } from "@/interfaces/musing";
import { getAll } from "@/lib/api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default async function Page() {
  const musings = getAll("musings");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Musings musings={musings as Musing[]}/>
    </Suspense>
  );
}
