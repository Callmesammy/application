import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Principles = () => {
    return ( 
        <div className="w-full pl-2 text-black grid lg:grid-cols-2 pt-3  h-full  items-center justify-center "> 
        <div className="flex  w-[28rem]  items-center lg:h-[20rem] h-[18rem] bg-red-600 overflow-hidden relative rounded-tl-[9rem] rounded-br-[9rem] ">
            <Image src="/51.jpg" alt="imge" fill className="object-fill relative "/>
        </div>
        <div className="pt-4 lg:pl-10 w-full flex space-x-4 px-3 lg:px-7 items-center">
        <Separator orientation="vertical" className="h-[10rem]  flex bg-border bg-green-800 "/>
<p className="">Organisations across the world today are facing unprecedented pressure to take an active part in creating a more sustainable and just future.
SLR exists to support clients on this journey. Our strategic, engineering and technical teams take the pain out of navigating the ever-shifting context of sustainable business and support you in Making Sustainability Happen. </p>

        </div>

</div>
     );
}
 
export default Principles