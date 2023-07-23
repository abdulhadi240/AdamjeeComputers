'use client'
import { motion } from 'framer-motion';

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <motion.button
        className="text-white hover:text-gray-300"
        whileTap={{ scale: 0.9 }}
        onClick={() => console.log('Mobile Menu Clicked')}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </motion.button>
    </div>
  );
};

export default MobileMenu;
