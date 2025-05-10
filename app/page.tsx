'use client'
import { TrendingVideo } from "@/data/trending";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SearchForm from "./component/SearchForm";
export default function Home() {
  const [name,setName]= useState("")

  return (
   <div className="bg-[#013b94]  sm:absolute sm:top-[70px]">
    <div className="p-5 max-w-7xl overflow-y-hidden overflow-x-hidden mx-auto ">
       <h2 className="font-bold  text-sm sm:text-5xl text-white">Find your Next Stay</h2>
       <h3 className="text-white py-5 sm:text-xl">Search low prices on hotels, homes and much more ...</h3>
     </div>
     <div className="m-4 mt-0 -mb-[50px] sm:-mb-[80px] px-2 lg:px-4">
      <SearchForm />
    </div>
       <div className="sm:p-5 pt-[70px] w-[100vw] mt-[1px] sm:mt-6 mx-auto bg-white">
         <h3 className="text-xl font-bold sm:text-center">Trending Destination</h3>
         <p className="font-light sm:text-center">Most popular choices for travellers from around the world</p>
     
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:flex 2xl:flex-wrap gap-4 sm:gap-4  py-5 ">
         {TrendingVideo.map((trend)=>
       <Card className="ml-1    mr-1 h-fit " key={trend.id}>
         <img src={trend.img} alt="error" className="w-[500px] sm:w-[20rem] sm:h-[18rem] h-[12rem] cursor-pointer rounded-t-lg"/> 
       <CardContent>
        <CardTitle className="mt-4 text-nowrap">{trend.title}</CardTitle>
         <CardDescription className="text-nowrap">{trend.description}</CardDescription>
       </CardContent>
       <CardFooter className="flex">
         {/* <p>{trend.location}</p> */}
         {/* <Button onClick={()=>setName(trend.location)} className="bg-blue-400 hover:bg-white hover:text-blue-400 transition-colors">Book Now</Button> */}
       </CardFooter>
     </Card>
)}
</div>
      </div>
    </div>

  );
}
