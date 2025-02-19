import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Spectrum = () => {
    return (
        <div className="px-3 w-full h-full flex flex-grow pt-10">
            <div className="grid lg:grid-cols-2 w-full h-full">
            <div className="space-y-5 flex flex-col px-3">
            <h1 className="text-2xl">Full-Spectrum Solutions</h1>
                    
                    <p className="text-sm ">
                    We are specialists in our field, able to offer clients full-spectrum sustainability strategy through to project delivery support. This enables us to help clients tackle the greatest sustainability challenges they face today.



                    </p>
                    <div className="underline text-md w-[18rem] space-y-2 hover:text-green-700 hover:scale-110 duration-500 ease-in-out transition-transform flex justify-between"> 
                        <Link href="/" >Learn more about our process   </Link>
                        <MdArrowOutward className="size-4"/>
                   </div> 
                   </div> 
                   <div className="w-full h-full justify-end flex relative">
                   <div className="px-3 flex   w-[24rem] rounded-full bg-green-900/30 relative">

<div>
                   </div>


</div>

</div>
            </div>
            </div>
      );
}
 
export default Spectrum;