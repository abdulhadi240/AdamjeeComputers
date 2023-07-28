'use client';
import { motion } from "framer-motion";

const BrandSlider = () => {
  const brands = [
    // Replace the URLs with the URLs of your brand images
    "/brand1.webp",
    "/brand2.webp",
    "/brand3.webp",
    "/brand4.webp",
    "/brand6.png",
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        className="flex"
        animate={{
          x: [-100, 0, 100, 200, 300, 400, 500],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
          
        }}
      >
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="h-20  object-contain mx-2"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSlider;
