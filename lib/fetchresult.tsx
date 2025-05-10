import { SearchParams } from "@/app/search/page"

async function fetchresult(searchParams:SearchParams) {
    const userName = process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD
    console.log(searchParams+"jpg")
    if (searchParams.url) {
        const url = new URL(searchParams.url);
        // rest of your code
        alert("fdgdfgf")
      } else {
        console.log('searchParams.url is empty or null');
      }
    Object.keys(searchParams).forEach((key)=>{
        if(key === "url"|| key === "location") return ;
        const value = searchParams[key as keyof SearchParams]
        if(typeof value === "string"){
            url.searchParams.append(key,value)
            console.log(url+"scabbler")
        }
    })
  return (
    <div>fetchresult</div>
  )
}

export default fetchresult