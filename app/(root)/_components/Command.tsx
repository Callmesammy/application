"use client"

import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { useState } from "react"
  
  export function CommandDemo() {
    const [search, setIssearch] = useState(false)
    return (
      <Command className="rounded-lg  border shadow-md md:min-w-[450px] ">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList  className="">
          <CommandEmpty hidden>No results found.</CommandEmpty>
          <CommandGroup className="" heading="Suggestions">
        <CommandItem >
          
            </CommandItem>
          </CommandGroup>
         
        </CommandList>
      </Command>
    )
  }
  