import { CiWavePulse1 } from "react-icons/ci";
import { image } from ".";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import CustomeButton from "./custom-button";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


const Latest = () => {
    return (
        <div  className="flex flex-grow lg:min-h-[70vh] min-h-[190vh]  relative   w-full h-full  pt-5 bg-gradient-to-l via-white/15 from-black/5 to-black/5 flex-col">
           <div className="grid gap-3 pb-3 absolute grid-cols-12 grid-rows-2 h-full w-full opacity-70 bg-green-600/15 right-0 ">
            {Array.from({length: 70}, (__, item)=>(
                <div style={{animationDelay: `${Math.random()}s`, animationDuration: `${Math.random() * 6} s`}} key={item} className="flex animate-pulse duration-500 0 ">
<CiWavePulse1 className="size-10 text-gray-950/20"/>
</div>
            ))}
    
            <div className=" px-3 z-20 grid gap-4 absolute lg:grid-cols-3 lg:px-8 w-full h-full max-h-[screen]">
                {image.map((item, keys)=>(
                    <div key={keys} className="w-62 bg-green-100 group  hover:bg-yellow-100 cursor-pointer h flex flex-col h-[26rem] ">
                        <div className="w-full  bg-white h-[17rem] z-20 flex relative">
                            <Image src={item.pic} fill alt="picture" className="object-fill  "/>
                            <span className="text-white flext z-40 insert-0 bottom-6 justify-end text-sm items-end absolute px-3 p-2 left-3 bg-gray-700">
                                {item.project}
                            </span>
                            <span className="text-white flext gap-2 flex z-40 insert-0 bottom-6 justify-end text-sm items-end absolute px-3 p-2 right-3 ">
                            <LuMapPin className="size-5" />
                                {item.loc}
                            </span>
                        </div>
                      <div className=" pt-2 justify-between flex px-3 ">
                        <h1 className="text-sm">{item.user}</h1>
                        <h1 className="text-sm ">{item.doings}</h1>
                      </div>
                      <div className="px-3 text-md font-semibold pt-1">
                      <h1 className="text-sm">{item.desc}</h1>
                      </div>
                      <div className="px-3 pt-2 space-y-2 ">

                    <Separator className=" size-[0.1rem] w-full bg-green-950"/>
                        <div className="px-3 group justify-between items-center w-full h-10 flex border  border-green-950">
                            <CustomeButton name="Read more"/>
                        </div>
                      </div> 
                    </div>
                ))}
                
                <Link  href="/" className="p-2 lg: -pt-6 justify-between flex hover:bg-yellow-100 bg-green-200 h-10 relative items-center ">
                    <h1>View all Projects</h1> 
                    <MdArrowOutward className="size-4"/>
                </Link>
            </div>



            </div> 
           
        </div>
      );
}
 
export default Latest;