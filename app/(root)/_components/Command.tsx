

  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,

  } from "@/components/ui/command"
  
  export function CommanD() {
    return (
      <Command className="rounded-lg  border shadow-md W-10  h-10 ">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList  className="">
          <CommandEmpty >No results found.</CommandEmpty>
          <CommandGroup className="" heading="Suggestions">
        <CommandItem >
          
            </CommandItem>
          </CommandGroup>
         
        </CommandList>
      </Command>
    )
  }
  