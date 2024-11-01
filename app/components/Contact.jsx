"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMailBulk, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import MagneticFramer from "../components/MagneticFramer";
import Link from "next/link";

const Contact = () => {
  return (
    <footer className="relative w-screen h-auto py-8 text-black bg-white sm:px-20 ">
      {/* Curve SVG */}

      <div className="container relative z-20 flex flex-col items-center justify-between mx-auto lg:flex-row">
        {/* Left Section */}

        {/* Right Section */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-24 text-3xl font-bold uppercase sm:text-5xl">Let's Collaborate</h3>
          <form
            className="flex flex-col gap-6"
            action="https://formspree.io/f/xpzgqqbz"
            method="POST"
            
          >
            {/* Full Name */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="mr-2 text-lg sm:text-2xl">*</span>
                <h1 className="text-lg sm:text-2xl">What is your name?</h1>
              </div>
              <input
                type="text"
                required
                name="Name"
                placeholder="Full Name"
                className="bg-transparent  text-lg sm:text-2xl focus:outline-none focus:border-b-[1px] focus:border-current w-full p-2"
              />
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="mr-2 text-lg sm:text-2xl">*</span>
                <h1 className="text-lg sm:text-2xl">What is your company name?</h1>
              </div>
              <input
                type="text"
                name="CName"
                placeholder="Company Name"
                className="bg-transparent  text-lg sm:text-2xl focus:outline-none focus:border-b-[1px] focus:border-current w-full p-2"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="mr-2 text-lg sm:text-2xl">*</span>
                <h1 className="text-lg sm:text-2xl">What is your phone number?</h1>
              </div>
              <input
                type="tel"
                required
                name="Tel"
                placeholder="Phone Number"
                className="bg-transparent  text-lg sm:text-2xl
                focus:outline-none focus:border-b-[1px] focus:border-current w-full p-2"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="mr-2 text-lg sm:text-2xl">*</span>
                <h1 className="text-lg sm:text-2xl">What is your email address?</h1>
              </div>
              <input
                type="email"
                required
                name="Email"
                placeholder="Email"
                className="bg-transparent  text-lg sm:text-2xl focus:outline-none focus:border-b-[1px] focus:border-current w-full p-2"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="mr-2 text-lg sm:text-2xl">*</span>
                <h1 className="text-lg sm:text-2xl">What is your message?</h1>
              </div>
              <textarea
                placeholder="Message"
                required
                name="Message"
                className="bg-transparent  text-lg sm:text-2xl focus:outline-none focus:border-b-[1px] focus:border-current w-full p-2"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#455CE9] hover:bg-[#455be9d6] text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </motion.div>

        <div className="flex flex-col gap-6 mb-6 text-center lg:text-left lg:mb-0">
          <h3 className="mb-2 font-bold "></h3>

          <MagneticFramer>
            <p className="text-xl">Phone: +923052108020</p>
          </MagneticFramer>
          <MagneticFramer>
            <p className="text-xl">Email: adamjeecomputers@live.com</p>
          </MagneticFramer>
          <MagneticFramer>
            <p className="text-xl">Address: Karachi , Pakistan</p>
          </MagneticFramer>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-2 mt-4">
            <MagneticFramer>
              <Link href={"https://mail.google.com/mail/u/0/?to=adamjeecomputers@live.com&su=Your+Subject&body=Your+Message&fs=1&tf=cm"} className="mr-4 text-2xl ">
                <div className='hidden'>Email</div>
                <FaMailBulk />
              </Link>
            </MagneticFramer>
            <MagneticFramer>
              <Link  href="https://api.whatsapp.com/send/?phone=%2B923052108020&text&type=phone_number&app_absent=0" className="mr-4 text-2xl ">
                <div className='hidden'>Whatsapp</div>
                <FaWhatsapp />
              </Link>
            </MagneticFramer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
