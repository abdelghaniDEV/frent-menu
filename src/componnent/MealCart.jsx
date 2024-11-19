import React from "react";
import { motion } from "motion/react";

function MealCart({ product, setProduct }) {
  return (
    <div className="" onClick={() => setProduct(product)}>
      <div className="border-b-[1px] items-center bg-[#373632] md:bg-inherit md:py-5   hover:bg-[#373632] cursor-pointer ">
        <div className="flex justify-between items-center">
          <div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-5 py-3 md:py-0 flex flex-col  md:w-full md:gap-2"
          >
            <div className="flex items-center justify-between text-[18px]">
              <h1 className="text-[18px] font-[500]">{product.name}</h1>
              <span className="text-[20px] flex items-center font-[600] block">
                <i className="bx bx-shekel"></i>
                {product.price}
              </span>
            </div>
            <p className=" leading-[16px] text-[15px] md:text-[18px] font-[200]  md:block">
              {product.description}
            </p>
            <span className="text-[20px] flex items-center font-[600] hidden">
              <i className="bx bx-shekel"></i>
              {product.price}
            </span>
          </div>
          <div className="hidden">
            <motion.img
              src={product.image}
              className="w-[140px]"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="px-3 py-1 hidden">
          <p className="text-[13px]">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MealCart;
