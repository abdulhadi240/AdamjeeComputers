'use client'
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import MobileMenu from "./MobileMenu";
import Name from "./Name";
const Navbar = () => {
  const [mobilemenu, setMobileMenu] = useState(true);

  return (
    <div className="w-full h-auto flex justify-between  sm:px-10 pt-4 mb-2 bg-white">
      <div className="mt-2 mr-2">LOGO</div>
      <div className="hidden sm:flex sm:ml-10">
        <div className="sm:flex sm:justify-start lg:gap-4 text-black ">
          <Name text={'Home'} link={'/'} />
          <Name text={'Contracts'} link={'/LABS'} />
          <Name text={'About us'} link={'/ABOUT'} />
          <Name text={'Contact us'} link={'/CONTACT'} />
        </div>
        <div><button className="w-auto h-auto p-3 text-sm bg-gray-400 text-white  rounded-lg hover:bg-gray-700 hover:text-white transition-all">SHOP NOW</button></div>
      </div>
      {mobilemenu ? (
        <AiOutlineMenu size={20} className="sm:hidden block mt-3 ml-2" onClick={() => { setMobileMenu(false) }} />

      ) : (
        <HiOutlineMenuAlt1 size={20} className="sm:hidden block ml-2" onClick={() => { setMobileMenu(true) }} />

      )}

      {!mobilemenu && (
        <div
          className="fixed top-0 bg-primary-black  z-50 sm:hidden ">
          <MobileMenu setMobileMenu={setMobileMenu} color={'white'} background={true} border={true} margin={20} hide={true} />
        </div>
      )}
    </div>
  );
};

export default Navbar;


