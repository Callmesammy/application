"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { SiGoogleappsscript } from "react-icons/si";
import { LiaGoogleWallet } from "react-icons/lia";
import { SiGooglebigtable } from "react-icons/si";
import { useState } from "react";
import { addfile, addports, docudocu } from ".";

const Spectrum = () => {
  const [entering, setEnterring] = useState(false);
  const [entering2, setEnterring2] = useState(false);
  const [entering3, setEnterring3] = useState(false);

  return (
    <div className="px-3 w-full h-full flex flex-col flex-grow pt-10">
      <div className="grid lg:grid-cols-2 w-full h-full">
        <div className="space-y-5 flex flex-col px-3">
          <h1 className="text-2xl">Full-Spectrum Solutions</h1>

          <p className="text-sm ">
            We are specialists in our field, able to offer clients full-spectrum
            sustainability strategy through to project delivery support. This
            enables us to help clients tackle the greatest sustainability
            challenges they face today.
          </p>
          <div className="underline text-md w-[18rem] space-y-2 hover:text-green-700 hover:scale-110 duration-500 ease-in-out transition-transform flex justify-between">
            <Link href="/">Learn more about our process </Link>
            <MdArrowOutward className="size-4" />
          </div>
        </div>
        <div className="w-full h-full justify-end lg:flex relative hidden ">
          <div className="px-3 flex items-center  justify-center w-[24rem] h-[8rem]  space-x-4 rounded-full bg-green-900/30 relative">
            <div
              className={`"p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full  " ${
                entering
                  ? " justify-center group flex bg-yellow-500  w-[6rem] scale-110 transition-colors duration-500  "
                  : " flex w-[6rem] justify-center"
              }`}
            >
              <SiGoogleappsscript className=" text-white size-10  transition-transform  group-hover:" />
            </div>
            <div
              className={`"p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full  " ${
                entering2
                  ? " justify-center group flex bg-red-500  w-[6rem] scale-110 transition-colors duration-500  "
                  : " flex w-[6rem] justify-center"
              }`}
            >
              <LiaGoogleWallet className="size-10 text-white " />
            </div>
            <div
              className={`"p-6 h-[6rem]  bg-green-900/20   w-[6rem] items-center flex rounded-full  " ${
                entering3
                  ? " justify-center group flex bg-blue-500  w-[6rem] scale-110 transition-colors duration-500 "
                  : "   flex w-[6rem] justify-center"
              }`}
            >
              <SiGooglebigtable className="size-10 text-white" />
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center  space-y-4 lg:grid-cols-3  pt-10 px-4 w-full h-full">
        <div
          onMouseEnter={() => setEnterring(true)}
          onMouseLeave={() => setEnterring(false)}
          className={`"w-full h-full flex "${
            entering
              ? "  group  flex flex-col w-full h-full "
              : "flex flex-col w-full h-full "
          }`}
        >
          <h1 className="  text-lg underline font-bold lg:text-xl">Strategy and Performance </h1>
          <div className="w-full h-full flex flex-col space-y-3 pt-3">
            {docudocu.map((item, file) => (
              <div key={file} className="flex flex-col">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          onMouseEnter={() => setEnterring2(true)}
          onMouseLeave={() => setEnterring2(false)}
          className={`"w-full h-full flex"${
            entering2
              ? " flex-col w-full h-full group transition-colors flex group duration-500 "
              : "flex text-black flex-col w-full h-full"
          }`}
        >
          <h1 className=" underline text-lg font-bold lg:text-xl">Sustability and Challenges </h1>
          <div className="w-full h-full flex flex-col space-y-3 pt-3">
            {addfile.map((item, file) => (
              <div key={file} className="flex flex-col">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          onMouseEnter={() => setEnterring3(true)}
          onMouseLeave={() => setEnterring3(false)}
          className={`" w-full h-full flex"${
            entering3
              ? " flex-col w-full h-full group transition-colors flex group duration-500 "
              : "flex  flex-col w-full h-full"
          }`}
        >
          <h1 className=" underline text-lg lg:text-xl font-bold">Project Delivery </h1>
          <div className="w-full h-full flex flex-col space-y-3 pt-3">
            {addports.map((item, file) => (
              <div key={file} className="flex flex-col">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spectrum;
