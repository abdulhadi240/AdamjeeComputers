import React from "react";
import MobileMenu from "./MobileMenu";
import Name from "./Name";
const Navbar = () => {
  return (
    <div className="w-full h-auto flex justify-between  lg:px-10 pt-4  bg-white">
        <div className="mt-2">LOGO</div>
        <div className=" lg:gap-4 text-black hidden lg:flex">
            <Name text={'Home'}  link={'/'}/>
            <Name text={'Contracts'} link={'/LABS'}/> 
            <Name text={'About us'} link={'/'}/> 
            <Name text={'Contact us'} link={'/CONTACT'}/>  
        </div>
        <div><button className="w-auto h-auto p-3 text-sm bg-gray-400 text-white  rounded-lg hover:bg-gray-700 hover:text-white transition-all">SHOP NOW</button></div>
    </div>
  );
};

export default Navbar;
