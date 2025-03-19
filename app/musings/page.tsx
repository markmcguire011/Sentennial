import Musings from "@/components/content/musings";
import { Musing } from "@/interfaces/musing";
import { getAll } from "@/lib/api";

type Params = Promise<{ page: string }>;

export default async function Page({ params }: { params: Params }) {
  const { page } = await params;
  const currentPage = Number(page) || 1;
  const musings = getAll("musings");

  return <Musings musings={musings as Musing[]} page={currentPage} />;
}
