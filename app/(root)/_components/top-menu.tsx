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
import { CommandDemo } from "./Command"
import { Menu } from "./Menubar";

const SHEET_SIDES = ["top"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
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
            
            <CommandDemo/>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
