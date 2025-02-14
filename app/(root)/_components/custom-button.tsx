"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";

interface buttonProps {
    icons?: string,
    name: string, 
}

const CustomeButton = ({
    icons, 
    name,
}: buttonProps) => {
    const path = usePathname();
   
    return ( 
        <Link href={path} className="w-full md:h-10 flex px-4 items-center   group justify-between text-sm  ">
             {name}
          <span className=" group-hover:translate-x-2 duration-500 items-end justify-end flex text-end">   <MdArrowOutward className="size-4"/></span> 

                {icons}
        </Link>
     );
}
 
export default CustomeButton;