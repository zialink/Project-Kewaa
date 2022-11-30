import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const LandingNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-between pt-5 pb-5 px-16 fixed z-10 bg-indigo-700">
        <div>
          <div className="flex gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="logo_picture"
              height="50"
              width="50"
              className="rounded-full"
            />
            <h2 className="font-serif text-xl mt-2">Kewaa project</h2>
          </div>
        </div>
        <div className="flex gap-6 text-md font-mono mt-3">
          <a href="#services" className="hover:underline">Our Services</a>
          <a href="#github" className=" hover:underline "> Documentation </a>
        </div>
        <div>
          <button
            className="bg-white px-4 py-2 transition-all ease-in-out rounded-md font-semibold hover:bg-black hover:text-white"
            onClick={() => router.push("/app")}
          >
            Enter App
          </button>
        </div>
      </div>
    </>
  );
};
