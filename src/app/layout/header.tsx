"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Drawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className="container mx-auto flex justify-between items-center py-4">
      {/* منوی دسکتاپ چپ */}
      <nav className="hidden md:flex flex-grow uppercase justify-start gap-8 text-gray-300 text-sm">
        <Link href="/" className="hover:text-red-800 transition">Home</Link>
        <Link href="/service" prefetch={true} className="hover:text-red-800 transition">Services</Link>
        <Link href="/work" prefetch={true} className="hover:text-red-800 transition">Works</Link>
      </nav>

      {/* لوگو */}
      <div className="flex items-center">
        <Link href="/">
          <div className="relative w-[120px] h-[40px] ml-2 md:ml-0">
            <Image
              src="/assets/images/logo.png"
              alt="لوگو"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>

      {/* دکمه همبرگری در موبایل */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 cursor-pointer mr-3">
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* منوی دسکتاپ راست */}
      <nav className="hidden md:flex flex-grow uppercase justify-end gap-8 text-gray-300 text-sm">
        <Link href="/gallery" prefetch={true} className="hover:text-red-800 transition">Gallery</Link>
        <Link href="/contact" prefetch={true} className="hover:text-red-800 transition">Get in Touch</Link>
      </nav>

      {/* Drawer موبایل */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          slotProps={{
            paper: {
              sx: { backgroundColor: "black", width: 300 },
            },
          }}
        >
          <div className="h-full flex flex-col py-5 px-7 relative uppercase">
            <div className="mt-10 flex flex-col gap-3 text-gray-300 justify-center text-center">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-red-800 transition duration-500">
                Home
              </Link>
              <Link href="/service" prefetch={true} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-red-800 transition duration-500">
                Services
              </Link>
              <Link href="/work" prefetch={true} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-red-800 transition duration-500">
                Works
              </Link>
              <Link href="/contact" prefetch={true} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-red-800 transition duration-500">
                Get in Touch
              </Link>
            </div>
          </div>
        </Drawer>
      )}
    </header>
  );
};

export default Header;
