"use client"
import React, { useState } from "react"
 import { z } from "zod"
 import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Field } from "@headlessui/react"
const SearchForm = () => {
  const [date,setDate] = useState()
  
  
  const router = useRouter()
  
    const formSchema = z.object({
        location: z.string().min(2,{
            message:"Please enter atleast 2 letters"
        }).max(50),
        dates:z.object({
          from:z.date({required_error:"please enter a valid date"}),
          to:z.date({required_error:"please enter a valid date"}),
        }),
        adults: z.string().min(1,{
          message:"Please select at least 1 Adult",
        }).max(12,{
          message:"Max 12 adults Occupancy"
        }),
        childrens:z.string().min(0).max(12,{
          message:"Max 12 Children Occupancy",
        }),
        rooms:z.string().min(1,{
          message:"Please select atleast one room",
        }).max(5,{
            message:"Not more than 5 Rooms"
        })
      })
 const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
        location:"",
        dates:{
            from:undefined,
            to:undefined,
        },
        adults:"1",
        childrens:"0",
        rooms:"1"
    }
 })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Getting the check in date
   let checkindate = values.dates.from.getDate()
   let checkinmonth = values.dates.from.getMonth() + 1
   let checkinYear = values.dates.from.getFullYear()
  //  Getting the checkout Date
  let checkoutdate = values.dates.to.getDate()
  let checkoutmonth = values.dates.to.getMonth() + 1
  let checkoutYear = values.dates.to.getFullYear()
  // Getting the rest of the params
   let location = values.location
   let childrens = values.childrens
   let adults = values.adults
   let rooms = values.rooms
    //Constituting the rest of the checkin and out 
    let checkingPeriod = `${checkinYear}-${checkinmonth}-${checkindate}` 
    let checkoutPeriod = `${checkoutYear}-${checkoutmonth}-${checkoutdate}`
    console.log(checkoutPeriod) 
    const url = new URL("https://www.booking.com/searchresults.en-gb.html")
    url.searchParams.set("ss",location)
    url.searchParams.set("no_rooms",rooms)
    url.searchParams.set("group_children",childrens)
    url.searchParams.set("checkin",checkingPeriod)
    url.searchParams.set("checkout",checkoutPeriod)
    url.searchParams.set("group_adult",adults)
  //  // ?ss=Douala%2C+Cameroon&efdco=1&label=en-row-booking-
  //  // desktop-v0aqgtf3mjWbjFaAWHbxPAS652796017659%3Apl%3Ata%3Ap1%3Ap2%3Aac
  //  // %3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9070075%3Ali%3Adec%3Adm&aid=2311236
  //  // &lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=-3148348&dest_type=city
  //  // &checkin=2024-12-21
  //  // &checkout=2025-01-31
  //  // &group_adults=3
  //  // &no_rooms=1&
  //  // group_children=3
  //  // &age=8&age=7&age=7
  router.push(`/search?url=${url.href}`)

  }
    return (
         <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80vw] mx-auto">
        <div className="sm:flex items-center justify-evenly gap-[10px]">
            <div>            
            <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <p className="text-bold font-bold text-xl sm:text-sm">
                Location

                </p>
                </FormLabel>
              <FormMessage />
              <div className="shadow-gray-400 shadow-2xl">
                <Input placeholder="Locations" {...field} />
                </div>
            </FormItem>
          )}
        />
        </div>
        <div className={cn("grid gap-2")}>
      <FormField
      control ={form.control}
      name="dates"
      render = {({field})=>(
         <FormItem className="flex flex-col">
          <FormLabel>Date</FormLabel>
          <FormMessage />
          <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            name="dates"
            variant={"outline"}
            className={cn(
              " w-full sm:w-[300px]  justify-start text-left font-normal",
              !field.value.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {field.value?.from ? (
              field.value?.to ? (
                <>
                  {format(field.value?.from, "LLL dd, y")} -{" "}
                  {format(field.value?.to, "LLL dd, y")}
                </>
              ) : (
                format(field.value?.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={field.value?.from}
            selected={field.value}
            onSelect={field.onChange}
            numberOfMonths={3}
            disabled={(date)=>
              date <new Date(new Date().setHours(0,0,0,0))
            }
          />
        </PopoverContent>
        <FormMessage />
      </Popover>
         </FormItem>
      )}
      />
      
    </div>
    <div className="flex gap-2">

        <div className="mx-2 sm:mx-0">
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <FormItem>
              <FormLabel>      <p className="text-bold font-bold text-xl sm:text-sm">
                Adults

                </p></FormLabel>
              <FormMessage />
              <div className="shadow-gray-400 shadow-2xl">
                <Input placeholder="adults" {...field} />
                </div>
            </FormItem>
          )}
          />
        </div>
        <div>
        <FormField
          control={form.control}
          name="childrens"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
              <p className="text-bold font-bold text-xl sm:text-sm">
                Childrens

                </p>
              </FormLabel>
              <FormMessage />
              <div className="shadow-gray-400 shadow-2xl">
                <Input placeholder="childrens" {...field} />
                </div>
            </FormItem>
          )}
          />
        </div>
        <div >
        <FormField
          control={form.control}
          name="rooms"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>  
                    <p className="text-bold font-bold text-xl sm:text-sm">
                Rooms

                </p></FormLabel>
              <FormMessage />
              <FormControl>
              <div className="shadow-gray-400 shadow-2xl">
                <Input placeholder="rooms" {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
          />
        </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default SearchForm