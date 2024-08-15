import Musings from "@/components/musings";
import { Musing } from "@/interfaces/musing";
import { getAll } from "@/lib/api";

export default async function Page({ searchParams }: {
    searchParams?: {
        page?: number
    }
}) {

  const currentPage = Number(searchParams?.page) || 1;
  const musings = getAll(false)

  return (
    <Musings musings = { musings as Musing[]} page={ currentPage }/>
  )
}