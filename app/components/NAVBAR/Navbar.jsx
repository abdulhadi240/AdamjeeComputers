import React from "react";
import MobileMenu from "./MobileMenu";
import Name from "./Name";
const Navbar = () => {
  return (
    <div className="w-full h-10 lg:flex lg:justify-between hidden px-10 pt-4 pb-14 fixed bg-white top-0">
        <div className="mt-2">LOGO</div>
        <div className="flex gap-4 text-black ">
            <Name text={'Home'}/>
            <Name text={'Contracts'}/> 
            <Name text={'About us'}/> 
            <Name text={'Contact us'}/>  
        </div>
        <div><button className="w-auto h-auto p-3 text-sm bg-gray-400 text-white  rounded-lg hover:bg-gray-700 hover:text-white transition-all">SHOP NOW</button></div>
    </div>
  );
};

export default Navbar;
