import Link from "next/link";
import { PiGooglePhotosLogoThin } from "react-icons/pi";
import { Animatedfunc } from "./AnimatedTestimonials";
import { Separator } from "@/components/ui/separator";

const FooterPage = () => {
    return (
        <div className="bg-white/5 min-h-[40rem] text-white flex space-y-10 pt-4 w-full h-full flex-col ">
          <div className="w-full h-full grid lg:grid-cols-2 px-4 ">
            <div className="w-[30rem] h-full flex flex-col px-7 pl-7 pt-6">
            <div
            className=" flex cursor-pointer text-white font-bold "
          >
            {" "}
            Flw
            <PiGooglePhotosLogoThin className="size-[5rem] text-white shadow-md rounded-full spinn" />
          </div>
          <p> Making Sustainability Happen</p>

          <div className="grid grid-cols-2 w-full h-full pt-10">
            <div className="w-full h-full flex flex-col space-y-4">
                <h1 className="text-sm font-bold">Company</h1>
                <Link href="/" className="hover:text-yellow-600">About us</Link>
                <Link href="/" className="hover:text-yellow-600">Contact</Link>
                <Link href="/" className="hover:text-yellow-600">Careers</Link>
                <Link href="/" className="hover:text-yellow-600">Feedback</Link>
                <Link href="/" className="hover:text-yellow-600">Our Location</Link>
                
                <a href="" className="pt-10 flex text-sm">Linkdin</a>
            </div>
            <div className="w-full h-full flex flex-col space-y-4">
                <h1 className="text-sm font-bold">Our Work</h1>
                <Link href="/" className="hover:text-yellow-600">Solutions</Link>
                <Link href="/" className="hover:text-yellow-600">Sectors</Link>
                <Link href="/" className="hover:text-yellow-600">Projects</Link>
                <Link href="/" className="hover:text-yellow-600">Content Hub</Link>
                <Link href="/" className="hover:text-yellow-600">Public Documents</Link>
                <Link href="/" className="hover:text-yellow-600">Technical Service</Link>
                <a href="" className="pt-10 flex text-sm">News Letter</a>

            </div>
          </div>
            </div>

                <Animatedfunc/>
          </div>

          <div className="w-full h-[10rem] bg-white/15 ">
            <Separator className="w-full  "/>
            <div className="text-sm px-3 h-full items-center pt-3 justify-between flex">
            <p>Privacy</p>
            <p>© 2025
Design by Renowned • Samson Moses

Terms & Conditions
Policies & Reports
Modern slavery (NG)
Supplier Code of Conduct </p>
            </div> 
          </div>
        </div>
      );
}
 
export default FooterPage;