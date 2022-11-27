import React from "react";
import Image from "next/image";
//import logo from "@images/logo.jpeg";

export const LandingNav = () => {
  return (
    <>
      <div className="w-full flex justify-between pt-5 pb-5 px-16 bg-indigo-700 bg-fixed">
        <div>
          <h2 className="font-serif text-xl ">Kewaa project</h2>
        </div>
        <div className="flex gap-6 text-md font-mono">
          <button className="hover:underline">
            Our Services
          </button>
          <button className=" hover:underline"> Documentation </button>
        </div>
        <div>
          <button className="bg-white px-4 py-2 transition ease-in-out duration-300 rounded-md font-semibold hover:bg-black hover:text-white">
            Enter App
          </button>
        </div>
      </div>
    </>
  );
};
