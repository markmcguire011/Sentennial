import Musings from "@/components/musings";
import { Musing } from "@/interfaces/musing";
import { getAll } from "@/lib/api";

export default async function Page() {
  const musings = getAll(false)

  return (
    <Musings musings ={ musings as Musing[]}/>
  )
}