import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { SiGoogleappsscript } from "react-icons/si";
import { LiaGoogleWallet } from "react-icons/lia";
import { SiGooglebigtable } from "react-icons/si";

const Spectrum = () => {
    return (
        <div className="px-3 w-full h-full flex flex-col flex-grow pt-10">
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
                   <div className="w-full h-full justify-end lg:flex relative hidden ">
                   <div className="px-3 flex items-center  justify-center w-[24rem] h-[8rem]  space-x-4 rounded-full bg-green-900/30 relative">
                        <div className="p-6 h-[6rem]  bg-green-900/20  w-[6rem] items-center flex rounded-full border">
                        <SiGoogleappsscript className="size-10" />

                        </div>
                        <div className="p-6 h-[6rem] w-[6rem]  bg-green-900/20   items-center flex rounded-full border">
                        <LiaGoogleWallet className="size-10"/>

                        </div> <div className="p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full border">
                        <SiGooglebigtable className="size-10"/>

                        </div>
<div>
                   </div>


</div>

</div>

<div className="grid lg:grid-cols-3 pt-10 px-4">
    <div className="w-full h-full flex">
<h1 className="text-lg lg:text-2xl">Strategy and Performance </h1>

    </div>
</div>
            </div>
            
            </div>
      );
}
 
export default Spectrum;