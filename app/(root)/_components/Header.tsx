"use client";
import { useEffect } from "react";
import { PiGooglePhotosLogoThin } from "react-icons/pi";
import gsap from "gsap";
import { Menu } from "./Menubar";
import { CommandDemo } from "./Command";
import { SheetSide } from "./top-menu";
import Image from "next/image";
import CustomeButton from "./custom-button";

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
    <div className="flex h-full lg:px-4 w-full flex-col pb-4 bg-gradient-to-t from-white/15 to-black-5 space-y-4 overflow-x-clip items-center">
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
        <div className="flex right-1 lg:hidden">
            
          <SheetSide />
        </div>

        <div className="items-center lg:flex hidden">
          {" "}
          <CommandDemo />
        </div>
      </div>
      <div className="lg:pt-10 pb-3 px-4 grid lg:grid-cols-2 w-full h-full  space-y-3">
     <div className="flex overflow-hidden w-full h-full gap-3  px-1 shrin ">
    
<div className="h-[15rem] items-center lg:h-[35rem] w-full overflow-hiddenh pb-4 flex flex-col">  
        <h1 className="text-[3rem] w-full lg:text-[90px] font-semibold text-white down tracking-wider"> Making sustainability  <span className="flex space-x-2 w-full">  <PiGooglePhotosLogoThin className="size-[5rem] flex text-white shadow-md rounded-full spinn bg-black" />Happen
        </span>     <div className=" lg:w-[30rem] text-sm mt-auto bg-white/15 rounded shadow-sm hover:bg-black/10  w-full  md:h-10 ">
        <CustomeButton name="Discover our solution "/>
        </div></h1>
      
      </div>
      
    
      </div>
     <div className=" justify-center  overflow-hidden flex "> 
      <Image src="/img2.jpg" alt="bg" width={ 800} height={700} className="object-fill rounded-bl-[6rem] shadow-lg"/>
      </div> 
     </div>
    </div>
  );
};

export default HeaderComponent;
