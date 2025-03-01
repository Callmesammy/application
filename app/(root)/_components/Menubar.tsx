"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/solutions",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/sectors",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/content-hub",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/about",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/contact",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/about",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Menu() {
  return (
    <NavigationMenu >
      <NavigationMenuList className="text-white font-bold w-full flex   ">
        <NavigationMenuItem >
          <NavigationMenuTrigger className="text-md">Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[60rem]  lg:w-[60rem] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
               
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Sectors</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[60rem]  lg:w-[60rem] lg:grid-cols-[.75fr_1fr]">
          {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" ">
          <Link href="/projects" legacyBehavior passHref className="bg-yellow-900/60">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-yellow-900/60"`} >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Content Hub</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[60rem]  lg:w-[60rem] lg:grid-cols-[.75fr_1fr]">
          {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">About</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[60rem]  lg:w-[60rem] lg:grid-cols-[.75fr_1fr]">
          {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem className="text-md ">
          <Link href="/careers" legacyBehavior passHref className="text-md">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md "`} >
              Careers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      
     

        <NavigationMenuItem className=" ">
          <Link href="/contacts" legacyBehavior passHref className="bg-yellow-900/60">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md"`} >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
