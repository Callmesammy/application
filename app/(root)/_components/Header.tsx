"use client";
import { useEffect } from "react";
import { PiGooglePhotosLogoThin } from "react-icons/pi";
import gsap from "gsap";
import { Menu } from "./Menubar";
import { CommandDemo } from "./Command";
import { SheetSide } from "./top-menu";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const HeaderComponent = () => {
  useEffect(() => {
    gsap.to(".spinn", {
      rotate: 360,
      ease: "power1.inOut",
      duration: 1.5,
    });

    gsap.fromTo (".down", {
      translateY: -250,  
      
    }, {
      translateY: 0,
      ease: "power2.inOut", 
      duration: 1.5
    })
  }, []);

  const hadleRotate = (url: string) => {
    window.location.href = url;
  };
  return (
    <div className="flex h-full lg:px-4 w-full flex-col pb-4 bg-gradient-to-l via-white/15 from-black/5 to-black/5 space-y-4 overflow-x-clip items-center px-2">
      <div className="flex justify-between w-full">
        <div className="flex w-fulll items-center ">
          <div
            onClick={() => hadleRotate("/")}
            className=" flex cursor-pointer text-white font-bold "
          >
            {" "}
            Flw
            <PiGooglePhotosLogoThin className="size-[5rem] text-white shadow-md rounded-full spinn" />
          </div>
          <div className="hidden lg:flex">
            <Menu />{" "}
          </div>
        </div>
        <div className="flex right-1 lg:hidden ">
            
          <SheetSide />
        </div>

        <div className="items-center lg:flex hidden w-full  p-2 truncate">
          {" "}
          <CommandDemo />
        </div>
      </div>
      <div className="lg:pt-10 pb-3 px-4 grid lg:grid-cols-2 w-full h-full  space-y-3">
     
         <div className="w-full h-full items-center flex pt-10"> 

     <div className="flex overflow-hidden w-full h-full ">
<div className="h-full relative items-center space-y-4 lg:h-[35rem] w-full overflow-hiddenh pb-4 flex flex-col">  
        <h1 className="text-6xl  lg:text-7xl font-semibold  text-white down tracking-wide"> Making sustainability  <span className="flex space-x-2 w-full">  <PiGooglePhotosLogoThin className="size-[5rem] flex text-white shadow-md rounded-full spinn bg-black" />Happen
        </span>     
       
        
        </h1>
       <div className=" cursor-pointer items-center  animatteitems-center lg:w-[30rem] l text-white justify-between px-2  font-bold mt-auto p-2 flex bg-white/15 rounded shadow-sm hover:bg-black/10  w-full  md:h-10 top-7">
        <Link href="/" className="text-md"> Discover our Solutions</Link>
        <MdArrowOutward className="size-4"/>
        </div>

      </div>
      </div>
      
    
      </div>
     <div className=" justify-center  overflow-hidden flex w-full h-full "> 
      <div className="w-[40rem] h-[30rem] flex relative ">


      <Image src="/img2.jpg" alt="bg" fill className="object-fill relative rounded-bl-[6rem]  shadow-lg shadow-black"/>
            </div>
</div> 
     </div>

    </div>
  );
};

export default HeaderComponent;
