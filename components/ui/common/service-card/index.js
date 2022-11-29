import Image from "next/image";
import React from "react";

export const ServiceCard = () => {
  return (
    <div className="flex justify-center mt-10 gap-24">
      <div className="border-4 bg-gray-800 rounded-lg border-gray-800 shadow-lg ">
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.......
          </p>
        </div>
      </div>
      <div  className="border-4 bg-gray-800 rounded-lg border-gray-800 shadow-lg">
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.......
          </p>
        </div>
      </div>
    </div>
  );
};
