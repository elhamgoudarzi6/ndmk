"use client";

import { FC } from "react";
import Link from "next/link";

import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-black text-gray-500 py-10 mt-20">
           
   

      {/* بخش پایانی */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm pt-6">
        {/* متن کپی‌رایت */}
        <h6 className="mb-5 md:mb-0">© All Rights Reserved</h6>

        {/* آیکن‌های شبکه اجتماعی */}
        <div className="flex gap-4 text-lg text-gray-400">
          <Link href="#"><FaInstagram className="hover:text-red-800 transition" /></Link>
          <Link href="#"><FaTwitter className="hover:text-red-800 transition" /></Link>
          <Link href="#"><FaLinkedin className="hover:text-red-800 transition" /></Link>
          <Link href="#"><FaFacebook className="hover:text-red-800 transition" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
