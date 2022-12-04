import Image from "next/image";
import React from "react";

export const TeamProfile = ({ image, name, skill }) => {
  return (
    <div>
      <Image
        src={image}
        alt="team_profile"
        height="150px"
        width="200px"
        className="rounded-full border-2 hover:blur-none blur-sm hover:cursor-pointer border-black"
      />
      <p className="text-center text-xs lg:text-md md:text-md font-semibold">
        {name}
      </p>
      <p className="text-center text-xs lg:text-md md:text-md font-semibold">
        {" "}
        {skill}
      </p>
    </div>
  );
};
