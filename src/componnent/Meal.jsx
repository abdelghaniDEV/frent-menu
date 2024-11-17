import React, { useEffect, useState } from "react";
import pic1 from "../assets/pic-1@4xn.png";
import burger from "../assets/plahh.png";
import FriedShrimp from "../assets/fried Shrimp.webp";
import ketshup from "../assets/Ket.png";
import may from "../assets/mayy.jpg";
import meal02 from "../assets/meal02.jpg";
import { motion } from "motion/react";
import { translateText } from "../translateFunc";


function MealComponent({product}) {
  const [translatedDescription, setTranslatedDescription] = useState("");
  // useEffect(async() => {
  //   const res = await fetch("https://libretranslate.com/translate", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       q: "may name is",
  //       source: "auto",
  //       target: "ar",
  //       format: "text",
  //       alternatives: 3,
  //       api_key: ""
  //     }),
  //     headers: { "Content-Type": "application/json" }
  //   });
    
  //   console.log(await res.json());
  // },[product])
  return (
    <div className="md:flex flex-col items-center   to-gray-900 text-white  rounded-lg shadow-lg max-w-sm mx-auto relative hidden">
      {/* Meal Name */}
      <h1 className="text-[50px] font-[600] mb-4 text-center text-white z-[1000]">
        {product?.name}
      </h1>

      {/* Image Section with Shadow */}
      <motion.div
        className="relative mb-  "
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute h-[400px] w-[400px]   rounded-full "></div>
        <img src={product?.image} alt="Meal" className="relative w-[400px] z-[2000] " />
        <div className="absolute w-[10px] h-[10px] z-0 rounded-full shadow-[0px_0px_400px_150px_rgba(255,165,0,0.5)]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
      </motion.div>
      <div>
        <h1 className="text-[40px] font-[600] flex items-center">
          <i className="bx bx-shekel"></i>
         {product?.price}
        </h1>
      </div>
      {/* Ingredients */}
      <div className="flex justify-center flex-col gap-[10px] w-full  mt-4">
        <div className="flex flex-col gap-2">
          <p>
           {product?.description}
          </p>
        </div>
        {/* <p>{translateText(product?.description)}</p> */}
      </div>
    </div>
  );
}

export default MealComponent;
