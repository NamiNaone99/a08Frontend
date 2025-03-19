import React from "react";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

const TopMenu = () => {
  return (
    <div className="h-16 flex justify-between items-center px-6 py-2 bg-gradient-to-r from-orange-200 to-amber-100 shadow-md">
      <div className="flex items-center gap-2">
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={48}
          height={48}
          className="object-cover rounded-full shadow-sm hover:scale-105 transition-transform duration-300"
        />
        <span className="font-semibold text-orange-800 text-xl hidden sm:block">
          Travel Booking
        </span>
      </div>

      <div className="flex items-center gap-6">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <TopMenuItem title="Destinations" pageRef="/destinations" />
        <TopMenuItem title="About" pageRef="/about" />
      </div>
    </div>
  );
};

export default TopMenu;
