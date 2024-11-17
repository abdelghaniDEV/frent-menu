import React from "react";
import logo from "../assets/logo-01@4x.png";
import logo01 from "../assets/logo04.png";
import rest from "../assets/rest.jpg";
export default function Header() {
  return (
    <div>
      {/* <div className="flex items-center justify-center">
        <img src={logo01} className="md:w-[100px]  w-[100px]  " />
        <div className="flex gap-1 hidden ">
          <button className="p-1 hidden">Admin</button>
          <i className="bx bxs-user text-[30px] rounded-full text-[#7B5D49] p-1 bg-white "></i>
        </div>
      </div> */}
      <div className="flex justify-center md:justify-between items-center">
        <div className="py-2 text-white flex  gap-2  justify-center">
          <img src={logo01} className="w-[80px] leading-3" />
          <div className="text-[34px] flex flex-col gap-3">
            <h3 className="font-Dancing">Welcom Our</h3>
            <h1 className="font-bebas leading-3 text-[40px] text-[#DCA57E]">
              Resturant
            </h1>
          </div>
        </div>
        <div className="md:flex gap-1 border-2 hidden md:block ">
          <button className="p-1 font-righteous">Admin</button>
          <i className="bx bxs-user text-[30px] text-[#7B5D49]  bg-white "></i>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
