
import fetchresult from "@/lib/fetchresult";
import { notFound } from "next/navigation";

type Props = {
  searchParams:SearchParams;
}
export type SearchParams ={
  url:URL,
  group_adult:string,
  group_children:string,
  checkin:string,
  checkout:string,
  no_rooms:string,
}
export default async function Search(searchParams:SearchParams) {
  // if(!searchParams.url) return notFound()
  const result = await fetchresult(searchParams)
   if(!result) return <p>NOthing found</p>
  return (
    <div>page</div>
  )
}
