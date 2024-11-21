import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex justify-center md:justify-between items-center">
        <div className="py-2 text-white flex  gap-1 items-center mt-3  justify-center">
          <img src="/logo-ftt.png" className="w-[80px] leading-3" />
          <div className="text-[34px] flex flex-col gap-3">
            <h1 className="font-bebas leading-3 text-[40px] text-[#DCA57E]">
              Resturant & Bar
            </h1>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
