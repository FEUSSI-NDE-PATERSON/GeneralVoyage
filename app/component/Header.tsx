'use client'
import Link from "next/link"
import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ChatBubbleBottomCenterIcon, HomeModernIcon } from "@heroicons/react/16/solid"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { HomeIcon } from "@heroicons/react/16/solid"
import { ArrowBigRight, ContactIcon, FileBoxIcon, Phone } from "lucide-react"
import { it } from "node:test"
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid"
import { ClerkLoaded, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignInButton, SignUp, UserButton, useUser } from "@clerk/nextjs"
const items=[
  {name:"Book a Stay",
    description:"Get a better understanding of your traffic",
  iconName:<HomeIcon class="w-6 h-6 text-[#013b84]" />,
  href:"#"

  }, {name:"Book a Flight",
    description:"Speak directly to our customer",
    iconName:<ChatBubbleBottomCenterIcon class="w-6 h-6 text-[#013b84] " />,
    href:"#"
    
  }, {name:"Contact our Support team",
    description:"Your customer's detail would be save and secure",
    iconName:< PaperAirplaneIcon class="w-6 h-6 text-[#013b84]" />,
   href:"#"

  }
]
const itemsOption =[
  {name:'See demo booking',
  iconName:<FileBoxIcon class="w-6 h-6 text-[#013b84] " />
  },
  {name:'Contact us',
    iconName:<Phone class="w-6 h-6 text-[#013b84] "/>
    }
]

export default function Header(){

  const [isMobile,setIsMobile] = useState(false)
  const {user} = useUser()
  let [isOpen, setIsOpen] = useState(false)
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const passKeys = async  ()=>{
    try {
      
      const response = await user?.createPasskey()
      console.log(response)
    } catch (error) {
      console.error("error",error)
    }
  }

return (
    <header className="bg-[#013b84] min-h-[12vh] flex flex-row p-3 sm:fixed sm:left-0 sm:right-0 sm:z-30">
        <nav className="flex flex-row items-center    sm:justify-between w-[100vw]">
          <Link href="/" className="flex w-[100%] sm:w-fit">
        <p className="font-bold text-2xl text-white flex-1">
        General voyage
        </p>
         </Link>
           <div className="flex sm:hidden">
        <Button   onClick={open}
        className="rounded-md bg-black/20 float-rights p-3 text-sm text-right font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
       </Button>
           </div>
<div className="hidden sm:flex items-center">
  <Popover>
  <PopoverTrigger className="text-white font-bold hidden md:flex items-center p-1 ">
    <p className="mr-1">
  Stays
    </p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

  </PopoverTrigger>
  <PopoverContent className="flex flex-col p-3 justify-start">
  {items.map((item)=>
  <Link key={item.name} href={item.href} className="flex  items-center p-3 hover:bg-gray-200">
   <p className="mr-2">

   {item.iconName}
   </p>
    <div className="flex flex-col ">
    <p className="text-md font-bold text-[#013b84] ">{item.name}</p>
    <p className="text-[12px] ">{item.description}</p>
    </div>
  </Link>
  )}  
  <div className="flex p-1">
    {itemsOption.map((it)=>
    <div className="flex  items-center ml-2" key={it.name}>
      {it.iconName}
      <p className="text-sm text-[#013b84] ">{it.name}</p>
    </div>
    )}
  </div>
  </PopoverContent>
</Popover>
<div className="hidden sm:flex">
  <Link href="/" className="hidden sm:flex text-white font-bold ml-2 text-sm hover:text-blue-300">Flights</Link>
  <Link href="/" className="text-white font-bold ml-2 text-sm hover:text-blue-300">Car Rentals</Link>
  <Link href="/" className="text-white font-bold ml-2 text-sm hover:text-blue-300">Attractions</Link>
  <Link href="/" className="text-white font-bold ml-2 text-sm hover:text-blue-300">Flight + Hotel</Link>
</div> 
</div>
 <Dialog open={isOpen} as="div" className="fixed z-10  focus:outline-none inset-0 sm:hidden" onClose={close}>
        <div className="fixed inset-y-0 right-0  z-10 bg-[#013b94]">
          <div className="flex  items-center justify-center p-1">
            <DialogPanel
              transition
              className="p-8 rounded-xl bg-[#013b94] backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-stretch justify-evenly"
            >
              <div  className="flex justify-between">

              <p className="font-bold text-2xl text-white">
        General voyage
        </p>
                <Button
                  className="inline-flex items-center gap-2 ml-5 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
                </Button>
              </div>
              
              <div className="flex flex-col">
              <Popover>
  <PopoverTrigger className="text-white font-bold flex   items-center p-1 ">
    <p className="mr-1">
  Stays
    </p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

  </PopoverTrigger>
  <PopoverContent className="flex flex-col p-3 justify-start">
  {items.map((item)=>
  <Link key={item.name} href={item.href} className="flex  items-center p-3 hover:bg-gray-200">
   <p className="mr-2">

   {item.iconName}
   </p>
    <div className="flex flex-col ">
    <p className="text-md font-bold text-[#013b84] ">{item.name}</p>
    <p className="text-[12px] ">{item.description}</p>
    </div>
  </Link>
  )}  
  
  <div className="flex p-1">
    {itemsOption.map((it)=>
    <div className="flex  items-center ml-2" key={it.name}>
      {it.iconName}
      <p className="text-sm text-[#013b84] ">{it.name}</p>
    </div>
    )}
  </div>
  </PopoverContent>
</Popover>
  <Link href="/" className=" text-white font-bold text-lg ml-2 my-3  hover:text-blue-300">Flights</Link>
  <Link href="/" className="text-white font-bold ml-2  my-3 text-lg hover:text-blue-300">Car Rentals</Link>
  <Link href="/" className="text-white font-bold ml-2 my-3 text-lg hover:text-blue-300">Attractions</Link>
  <Link href="/" className="text-white font-bold ml-2 my-3 text-lg hover:text-blue-300">Flight + Hotel</Link>
 <div>
 <ClerkLoaded>
       <SignedIn>
        <UserButton />
       </SignedIn>
       <SignedOut>
        <SignInButton mode="modal"/>
       </SignedOut>
       </ClerkLoaded> 
  </div>
</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

       <ClerkLoaded >
        <div className="hidden sm:flex">
       <SignedIn>
        <UserButton />
        <div className="hidden sm:flex flex-col items-center justify-center text-gray-300">
          <p className="text-xl font-bold">Welcome back!</p>
          <p className="text-sm font-bold">{user?.fullName}</p>
        </div>
        
        {
          user?.passkeys.length != 0?"":
          <Button onClick={passKeys}> Create passKeys</Button>
}
       </SignedIn>
       <SignedOut>
        <SignInButton  mode="modal"/>
       </SignedOut>
        </div>
       </ClerkLoaded>
        </nav>
        </header>
)
}