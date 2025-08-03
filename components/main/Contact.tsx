// components/main/Contact.tsx
"use client"; 

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, UserRound } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center gap-12 py-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          {/* THE FIX IS HERE */}
          I&apos;m currently open to new opportunities and collaborations. My
          inbox is always open, so feel free to reach out!
        </p>
      </div>

      {/* Rest of the component remains the same */}
      <div className="relative w-full max-w-2xl p-[1px] rounded-2xl bg-gradient-to-br from-purple-700 via-blue-500 to-cyan-400">
        <div className="w-full p-8 rounded-2xl bg-[#0e0c21] shadow-lg">
          <form
            action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}
            method="POST"
            className="flex flex-col gap-6"
          >
            <div className="relative">
              <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full p-3 pl-10 rounded-lg bg-[#1c1830] border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-gray-200 transition"/>
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full p-3 pl-10 rounded-lg bg-[#1c1830] border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-gray-200 transition"/>
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-5 text-gray-400" size={20} />
              <textarea name="message" id="message" rows={5} required placeholder="Your Message" className="w-full p-3 pl-10 rounded-lg bg-[#1c1830] border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-gray-200 transition"></textarea>
            </div>
            <button type="submit" className="group relative flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
              Send Message
              <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;