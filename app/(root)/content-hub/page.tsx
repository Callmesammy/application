"use client";
import { useEffect } from "react";
import { PiGooglePhotosLogoThin } from "react-icons/pi";
import gsap from "gsap";

import { CommanD } from "../_components/Command";
import { SheetSide } from "../_components/top-menu";
import { Menu } from "../_components/Menubar";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex   h-full lg:px-4 w-full flex-col  bg-green-950 space-y-4 overflow-x-clip items-center ">
      <div className="flex justify-between w-full  ">
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
        <div className="flex right-1 lg:hidden   ">
            
          <SheetSide />
        </div>

        <div className="items-center lg:flex hidden w-[17rem]  p-2 ">
          {" "}
          <CommanD />
        </div>
      </div>
      <div className=" bg-green-50 lg:pt-10 pb-3 px-4 grid lg:grid-cols-2 w-full h-full space-y-3">
     
         <div className="w-full h-full items-center flex pt-10 bg-green-950/5"> 

    
      
    
      </div>
     
     </div>
     <div className="w-full h-[13rem] bg-white/15 ">
            <Separator className="w-full  "/>
            <div className="text-sm text-white text-pretty px-3 h-full items-center pt-3 justify-between flex">
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
};

export default HeaderComponent;
