// components/main/Navbar.tsx
"use client"; // We need this for state and event handlers

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import hamburger menu icons

// Put navigation links in a constant for easier management
const NAV_LINKS = [
  { href: "#about-me", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
];

const Navbar = () => {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          {/* Logo */}
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            {/* You should have a small icon logo that is always visible */}
            <span className="text-xl font-bold ml-[10px] hidden md:block">
              <span className="text-blue-500">Subhadeep</span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Portfolio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="w-auto h-full hidden md:flex flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-5">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="cursor-pointer hover:text-purple-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Desktop Social Icons */}
          <div className="hidden md:flex flex-row gap-5">
            {Socials.map((social) => (
              <a 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer transition-transform hover:scale-110"
                />
              </a>
            ))}
          </div>

          {/* Hamburger Menu Button - Visible only on mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[65px] left-0 w-full bg-[#030014f1] backdrop-blur-lg z-40">
          <div className="flex flex-col items-center gap-6 py-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer text-gray-200 text-xl hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </a>
            ))}
            {/* Social Icons in Mobile Menu */}
            <div className="flex flex-row gap-8 mt-4">
              {Socials.map((social) => (
                <a 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.name}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={30}
                    height={30}
                    className="cursor-pointer transition-transform hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;