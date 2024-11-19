import React, { useEffect, useState } from "react";
import { motion } from "motion/react";


function MealComponent({product}) {
  const [translatedDescription, setTranslatedDescription] = useState("");
  const splitDescription = product?.description?.split("") || [];

  // إعداد الأنيميشن لكل حرف
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 }, // الحرف يبدأ مخفياً ومنخفضاً قليلاً
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05, // تأخير زمني بين كل حرف
        duration: 0.3, // مدة ظهور كل حرف
      },
    }),
  };

    // إعداد الأنيميشن لدخول وخروج الصور
    const imageAnimation = {
      initial: { opacity: 0, x: "-100%" }, // الصورة تبدأ من اليسار
      animate: { opacity: 1, x: 0 }, // الصورة تظهر وتنتقل إلى موضعها
      exit: { opacity: 0, y: "-100%" }, // الصورة القديمة تخرج من الأعلى
    };

    
  return (
    <div className="md:flex flex-col items-center   to-gray-900 text-white  rounded-lg shadow-lg max-w-sm mx-auto relative hidden">
      {/* Meal Name */}
      <motion.h1 className="text-[40px] font-[600] mb-4 text-center text-white z-[1000]"
       key={product?.price}
       
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {product?.name}
      </motion.h1>

      {/* Image Section with Shadow */}
      <motion.div
      key={product?.image}
        className="relative mb-   "
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute h-[400px] w-[400px]   rounded-full "></div>
        <img src={product?.image} alt="Meal" className="relative w-[300px] h-[260px] z-[2000] " />
        <div className="absolute w-[10px] h-[10px] z-0 rounded-full shadow-[0px_0px_400px_150px_rgba(255,165,0,0.5)]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
      </motion.div>
      <div>
        <h1 className="text-[40px] font-[600] flex items-center">
          <i className="bx bx-shekel"></i>
         {product?.price}
        </h1>
      </div>
      {/* Ingredients */}
      <div className="flex justify-center flex-col gap-[10px] w-full mt-2 text-center">
        {/* Key لضمان إعادة تشغيل الأنيميشن عند تغيير النص */}
        <motion.div
          key={product?.description} // مفتاح لربط النص بالأنيميشن
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
          className="flex flex-wrap justify-center text-lg"
        >
          {splitDescription.map((char, index) => (
            <motion.span
              key={index}
              initial="hidden"
              animate="visible"
              variants={letterAnimation}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char} {/* دعم المسافات */}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MealComponent;
