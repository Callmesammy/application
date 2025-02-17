import { CiWavePulse1 } from "react-icons/ci";
import { image } from ".";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";


const Latest = () => {
    return (
        <div  className="flex flex-grow min-h-[169vh] lg:min-h-screen relative   w-full h-full  pt-5 ">
           <div className="grid gap-3 min-h-screen pb-3 absolute grid-cols-12 grid-rows-2 h-full w-full opacity-70 bg-green-600/15 right-0 ">
            {Array.from({length: 70}, (__, item)=>(
                <div style={{animationDelay: `${Math.random()}s`, animationDuration: `${Math.random() * 6} s`}} key={item} className="flex animate-pulse duration-500 0 ">
<CiWavePulse1 className="size-10 text-gray-950/20"/>
</div>
            ))}
    
            <div className=" px-3 z-20 grid gap-4 absolute lg:grid-cols-3 lg:px-8 w-full h-full max-h-[screen]">
                {image.map((item, keys)=>(
                    <div key={keys} className="w-62 bg-green-100 h flex flex-col h-[26rem] ">
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
                      <div className="px-3 pt-2 space-y-2">

                    <Separator className=" size-[0.1rem] w-full bg-green-950"/>
                        <div className="px-3 justify-between w-full h-10 flex border pt-2 border-green-950">
                            
                        </div>
                      </div>
                    </div>
                ))}
            </div>



            </div> 
        </div>
      );
}
 
export default Latest;