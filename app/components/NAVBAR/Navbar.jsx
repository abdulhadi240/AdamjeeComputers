'use client'
import React, { useState} from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import MobileMenu from "./MobileMenu";
import Name from "./Name";
import Image from "next/image";
import Link from "next/link";
import ShopNowButton from "../ShopNowButton";
const Navbar = () => {
  const [mobilemenu, setMobileMenu] = useState(true);

  return (
    <div className="w-full h-auto flex justify-between px-6 sm:px-10 pt-4 mb-2 bg-white">
      <div className=" mr-2">
        <Image src={'/logo.png'} alt="logo" width={100} height={100}/>
      </div>
      <div className="hidden sm:flex sm:ml-10 mt-2 mb-2 xl:mb-0">
        <div className="sm:flex sm:justify-start lg:gap-4 text-black ">
          <Name text={'Home'} link={'/'} />
          <Name text={'Computer Labs'} link={'/LABS'} />
          <Name text={'About us'} link={'/ABOUT'} />
          <Name text={'Contact us'} link={'/CONTACT'} />
        </div>
       <ShopNowButton/>
       {/* <div><button  className="w-auto h-auto p-3 text-sm bg-black text-white  rounded-full  hover:bg-black/75 hover:text-white transition-all">SHOP NOW</button></div> */}
      </div>
      {mobilemenu ? (
        <AiOutlineMenu size={20} className="sm:hidden block mt-3 ml-2" onClick={() => { setMobileMenu(false) }} />

      ) : (
        <HiOutlineMenuAlt1 size={20} className="sm:hidden block ml-2" onClick={() => { setMobileMenu(true) }} />

      )}

      {!mobilemenu && (
        <div
          className="fixed top-0 left-0 bg-primary-black  z-50 sm:hidden ">
          <MobileMenu setMobileMenu={setMobileMenu} color={'white'} background={true} border={true} margin={20} hide={true} />
        </div>
      )}
    </div>
  );
};

export default Navbar;


