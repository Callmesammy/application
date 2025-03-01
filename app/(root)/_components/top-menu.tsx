"use client"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CommanD } from "./Command";

const SHEET_SIDES = ["top"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {

  const menuItems=[{
    name: "Solutions", 
    url: "/solutions"
  }, 
  {
  name: "Sectors", 
  url: "/sectors"
}, 
{
  name: "Projects", 
  url: "/projects"
}, 
{
  name: "Content-Hub", 
  url: "/content-hub"
}, 
{
  name: "About",  
  url: "/about"
}, 
{
  name: "Careers",  
  url: "/careers"
}, 
{
  name: "Contact",  
  url: "/contact"
}, 

  ]

  const pathname = usePathname()
  return (
    <div className="grid grid-cols-2 gap-2 ">
      {SHEET_SIDES.map((top) => (
        <Sheet key={top}>
          <SheetTrigger asChild>
          <IoMdMenu className=" hover:text-green-800 cursor-pointer size-7 text-white "/>
          </SheetTrigger>
          <SheetContent side={top} className="lg:hidden flex-col bg-green-900/70 h-full justify-center flex">
            <SheetHeader className=" ">
              <SheetTitle>

              </SheetTitle>
              <SheetDescription asChild>
              </SheetDescription>
            </SheetHeader>
            
            <CommanD/>
            <div>
              {menuItems.map((menuadd, keys)=>{
                const isActive = pathname===menuadd.url || pathname.startsWith (`${menuadd.url}/`)
                return(
                  <Link href={menuadd.url} key={keys} className={cn("w-full items-center gap-2 p-2 h-[4rem] flex flex-col text-white", isActive && "bg-green-950/15")}>
                      {menuadd.name}
                  </Link>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
