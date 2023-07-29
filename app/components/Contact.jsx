"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comapny, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const HandleChange = (e) => {
    setText(e.target.value);
  };
  const HandleChange1 = (e) => {
    setName(e.target.value);
  };
  const HandleChange2 = (e) => {
    setPhone(e.target.value);
  };
  const HandleChange3 = (e) => {
    setCompany(e.target.value);
  };
  const HandleChange4 = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-[100%] mt-20 md:mt-0 bg-gray-50 h-full ">
      <h1 className="text-3xl font-bold mb-8 flex justify-center lg:ml-20   tracking-wider mt-8 pt-8">
        Place Your Enquiry
      </h1>

      <div className="flex justify-center ">
        <div className=" flex flex-col sm:flex-row justify-center sm:gap-2 lg:gap-16 ">
          <form
            target="_blank"
            action="https://formspree.io/f/xoqovvzg"
            method="POST"
            className=""
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:ml-20">
              <div>
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="Name"
                    value={name}
                    className="text-sm rounded-lg w-80 sm:w-80 lg:w-96 peer h-10 placeholder:pl-2 border-2 value:text-sm"
                    onChange={HandleChange1}
                  />
                </div>
                <div className="mt-4 relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="Email"
                    required
                    value={text}
                    className="text-sm rounded-lg peer w-80 sm:w-80 lg:w-96 h-10 placeholder:pl-2  border-2"
                    onChange={HandleChange}
                  />
                </div>
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    required
                    value={phone}
                    className="text-sm placeholder:pl-2  rounded-lg w-80 sm:w-80 lg:w-96 h-10  border-2"
                    onChange={HandleChange2}
                  />
                </div>
                <div className="mt-4 relative">
                  <input
                    type="name"
                    placeholder="Company Name"
                    name="Company"
                    value={comapny}
                    className="text-sm placeholder:pl-2  rounded-lg  w-80 sm:w-80 lg:w-96 h-10  border-2"
                    onChange={HandleChange3}
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  onChange={HandleChange4}
                  value={message}
                  placeholder="Enter Message"
                  className="rounded-lg placeholder:text-sm placeholder:pl-2 mt-4 h-36 w-80 lg:w-96"
                />
              </div>

            </div>

            <button
              type="submit"
              className="p-2 w-80 lg:w-96 mt-4 h-10 rounded-lg bg-black text-white mb-4 lg:ml-20"
            >
              Send Message
            </button>
          </form>
          <div className="mt-2">
            <Image src={'/WhatsApp.jpeg'} height={420} width={420} alt="QR CODE" />
          </div>
        </div>

      </div>
    </div>
  );
};


export default Contact