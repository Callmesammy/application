import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

  interface MenuProps{
    title: string, 
    description: string, 
    title2?: string, 
    description2?: string, 
    title3?: string, 
    description3?: string, 
  }
  export function Menulist({
    title,
    description,
    title2,
    description2,
    title3,
    description3,
  }: MenuProps) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            {description}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{title2}</AccordionTrigger>
          <AccordionContent>
            {description2}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{title3}</AccordionTrigger>
          <AccordionContent>
            {description3}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  