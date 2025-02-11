"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import { Menu } from "./Menubar"
import { CommandDemo } from "./Command"

const SHEET_SIDES = ["top"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      {SHEET_SIDES.map((top) => (
        <Sheet key={top}>
          <SheetTrigger asChild>
          <IoMdMenu className=" cursor-pointer size-7 text-white "/>
          </SheetTrigger>
          <SheetContent side={top} className="lg:hidden flex-col bg-yellow-900/60 h-full justify-center flex">
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
