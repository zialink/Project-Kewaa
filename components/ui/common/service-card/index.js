import Image from "next/image";
import React from "react";

export const ServiceCard = () => {
  return (
    <div className="lg:flex md:flex px-10 lg:px-0 md:px-0 justify-center mt-10 gap-24">
      <div className="border-4 bg-gray-800 rounded-lg w-fit border-gray-800 shadow-lg ">
        <div className=" transition-all">
          <Image
            src="/images/pay-house.jpg"
            alt="service-card"
            height="200px"
            width="400px"
            className="rounded-lg"
          />
        </div>
        <div className="pl-2">
          <p className="text-xl text-white font-semibold">
            Own a property today
          </p>
          <p className="w-96 text-start pt-3 pb-3 text-white">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled.......
          </p>
        </div>
      </div>

      <div  className="border-4 bg-gray-800 w-fit mt-8 lg:mt-0 md:mt-0 rounded-lg border-gray-800 shadow-lg">

        <div className="transition-all">
          <Image
            src="/images/house_puzzle2.jpeg"
            alt="service-card"
            height="200px"
            width="400px"
            className="rounded-lg"
          />
        </div>
        <div className="pl-2">
          <p className="text-xl text-white font-semibold">
            Invest in real Estate
          </p>
          <p className="w-96 text-start pt-3 pb-3 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled.......
          </p>
        </div>
      </div>
    </div>
  );
};
