"use client";
import { useEffect } from "react";
import { PiGooglePhotosLogoThin } from "react-icons/pi";
import gsap from "gsap";
import { Menu } from "./Menubar";
import { CommandDemo } from "./Command";
import { SheetSide } from "./top-menu";

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
    <div className="flex w-full flex-col space-y-7 items-center">
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
      <div className=" px-4 grid md:grid-cols-2 w-full h-full pt-5">
     <div className="flex w-full h-full gap-3  ">
     
<div className="h-[15rem] lg:h-[25rem] w-full overflow-hidden flex">  
        <h1 className="text-7xl w-full lg:text-8xl text-white down tracking-wider"> Making sustainability  <span className="flex space-x-2 w-full">  <PiGooglePhotosLogoThin className="size-[5rem] flex text-white shadow-md rounded-full spinn bg-black" />Happen
        </span> </h1>
      </div></div>
     <div> fr</div> 
     </div>
    </div>
  );
};

export default HeaderComponent;
