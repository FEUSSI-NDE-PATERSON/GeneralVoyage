import { SearchParams } from "@/app/search/page"

async function fetchresult(searchParams:SearchParams) {
    const userName = process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD
    console.log(searchParams+"jpg")
  
  return (
    <div>fetchresult</div>
  )
}

export default fetchresult