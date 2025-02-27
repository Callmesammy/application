import Link from "next/link";
import { PiGooglePhotosLogoThin } from "react-icons/pi";

const FooterPage = () => {
    return (
        <div className="text-white flex px-4 pt-4 w-full h-full  ">
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

            </div>
            <div className="w-full h-full flex flex-col space-y-4">
                <h1 className="text-sm font-bold">Our Work</h1>
                <Link href="/" className="hover:text-yellow-600">Solutions</Link>
                <Link href="/" className="hover:text-yellow-600">Sectors</Link>
                <Link href="/" className="hover:text-yellow-600">Projects</Link>
                <Link href="/" className="hover:text-yellow-600">Content Hub</Link>
                <Link href="/" className="hover:text-yellow-600">Public Documents</Link>
                <Link href="/" className="hover:text-yellow-600">Technical Service</Link>

            </div>
          </div>
            </div>
            
          </div>
        </div>
      );
}
 
export default FooterPage;