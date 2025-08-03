// components/main/Footer.tsx
import React from "react";
import { Socials, UserData } from "@/constants";
import { RxGithubLogo } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
};

interface FooterLinkProps {
  icon: IconType;
  href: string;
  label: string;
}

const FooterLink = ({ icon: Icon, href, label }: FooterLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-300 transition-all duration-300 hover:text-purple-400 hover:scale-105"
  >
    <Icon size={24} />
    <span className="text-base">{label}</span>
  </a>
);

// Define a type for UserData to avoid using 'any'
interface UserDataType {
  githubUrl: string;
  leetcodeUrl?: string; // Optional property
  youtubeUrl?: string;  // Optional property
}

const Footer = () => {
  // Cast UserData to our new type to safely access properties
  const typedUserData = UserData as UserDataType;
  const leetcodeUrl = typedUserData.leetcodeUrl || "#";
  const youtubeUrl = typedUserData.youtubeUrl || "#";

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-8 md:p-15 border-t border-gray-700/50">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-bold text-lg text-white">Development</h3>
            <FooterLink icon={RxGithubLogo} href={typedUserData.githubUrl} label="Github" />
            <FooterLink icon={SiLeetcode} href={leetcodeUrl} label="LeetCode" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-bold text-lg text-white">Social Media</h3>
            {Socials.map((social) => (
              <FooterLink key={social.name} icon={iconMap[social.name]} href={social.link} label={social.name}/>
            ))}
            <FooterLink icon={FaYoutube} href={youtubeUrl} label="YouTube" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-bold text-lg text-white">Contact Me</h3>
            <p className="flex items-center gap-3 text-gray-300">
              <HiOutlineMail size={24} />
              <span className="text-base">subhapaul637@gmail.com</span>
            </p>
            {/* THE FIX IS HERE */}
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Let&apos;s have a chat
            </a>
          </div>
        </div>
        <div className="my-8 w-full h-[1px] bg-gray-700" />
        <div className="text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} Subhadeep Paul. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 italic">
            Crafted with passion, fueled by coffee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;