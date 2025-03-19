import Musings from "@/components/content/musings";
import { Musing } from "@/interfaces/musing";
import { getAll } from "@/lib/api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

type Params = Promise<{ page: string }>;

export default async function Page({ params }: { params: Params }) {
  const { page } = await params;
  const currentPage = Number(page) || 1;
  const musings = getAll("musings");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Musings musings={musings as Musing[]} page={currentPage} />
    </Suspense>
  );
}
