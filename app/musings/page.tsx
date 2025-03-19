import Musings from "@/components/content/musings";
import { Musing } from "@/interfaces/musing";
import { getAll } from "@/lib/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const musings = getAll("musings");

  return <Musings musings={musings as Musing[]} page={currentPage} />;
}
