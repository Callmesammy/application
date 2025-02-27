import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CustomeButton from "./custom-button";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { picture } from ".";

const LatestThinking = () => {
    return ( 
        <div className="flex w-full h-full pt-4 px-4 flex-col py-4">
            <h1 className="text-2xl   lg-3xl text-pretty"> Latest Thinking </h1>
            <div className="grid pt-5 lg:grid-cols-3 gap-3">
            {picture.map((item, ke)=>(
            <div key={ke} className="w-62 space-x-3 bg-green-100 group  hover:bg-yellow-100 cursor-pointer h flex flex-col h-[26rem] ">
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
     );
}
 
export default LatestThinking;