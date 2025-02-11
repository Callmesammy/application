"use client"
import { useEffect } from "react";
import { PiGooglePhotosLogoThin } from "react-icons/pi";
import gsap from "gsap"
import { Menu } from "./Menubar";
import { CommandDemo } from "./Command";



const HeaderComponent = () => {
    useEffect(()=>{
        gsap.to(".spinn",{
            rotate: 360,
            ease: "power1.inOut",
            duration: 1.5
        }, )
    },[])

    const hadleRotate =(url: string)=>{
        window.location.href = url
    }
    return ( 
        <div className="flex w-full flex-col space-y-7 items-center">
            <div className="flex justify-between w-full">
                <div className="flex items-center space-x-3"> 
                <div onClick={()=>hadleRotate("/")} className="flex cursor-pointer text-white font-bold"> Flw
            <PiGooglePhotosLogoThin className="size-[5rem] text-white shadow-md rounded-full spinn"/>
            </div>
                    
             <Menu/> 
             </div>
            <div className="items-center flex"> <CommandDemo/></div>
            </div>
          <div onClick={()=>hadleRotate("/")} className="flex cursor-pointer text-white font-bold"> Flw
            <PiGooglePhotosLogoThin className="size-[5rem] text-white shadow-md rounded-full spinn"/>
            </div>
            <div className="flex">
            <h1 className="text-7xl text-white">                Making sustainability Happen 
            </h1>

            </div>
        </div>
     );
}
 
export default HeaderComponent;