import React from "react";
import pic1 from "../assets/pic-1@4xn.png";
import { motion } from "motion/react";

function MealCart({product , setProduct}) {
  return (
    <div className="" onClick={() => setProduct(product)}>
      <div className="border-b-[1px] items-center bg-[#373632] md:bg-inherit md:py-5   hover:bg-[#373632] cursor-pointer ">
        <div className="flex justify-between items-center">
          <div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-5 flex flex-col w-[220px] md:w-full md:gap-2"
          >
            <div className="flex items-center justify-between text-[18px]">
              <h1 className="text-[20px] font-[600]">{product.name}</h1>
              <span className="text-[20px] md:flex items-center font-[600] hidden md:block">
              <i className="bx bx-shekel"></i>
              {product.price}
            </span>
            </div>
            <p className="text-[px] leading-[16px] hidden md:block">{product.description}</p>
            <span className="text-[20px] flex items-center font-[600] md:hidden">
              <i className="bx bx-shekel"></i>
              {product.price}
            </span>
          </div>
          <div
            className="md:hidden"
          >
            <motion.img src={product.image} className="w-[140px]" 
                initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        {/* <p className="text-[13px] leading-[16px] px-5 pb-4 hidden ">
        {desc.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {char}
              </motion.span>
            ))}
        </p> */}
      </div>
    </div>
  );
}

export default MealCart;
