// components/ShopNowButton.js

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ShopNowButton = () => {
  return (
    <ScrollLink to="products" smooth={true} duration={500}>
      <button className='w-auto h-auto  p-3 text-sm bg-black text-white  rounded-lg hover:bg-black/75  hover:text-white transition-all'>Shop Now</button>
    </ScrollLink>
  );
};

export default ShopNowButton;
