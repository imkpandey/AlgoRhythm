"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import  Link  from 'next/link'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    <div className="absolute w-[55%] inset-0 gradient-01" />
    <div className="2xl:max-w-[100%] flex">
      <h2 className="font-extrabold text-[24px] leading-[20px] text-gray-900">
        ALGORHYTHM
      </h2>
      <div className="w-full flex justify-end gap-10">
        <a href='#About' className="font-medium text-[22px] leading-[20px] text-gray-900 hover:underline underline-offset-2">
          About
        </a>
        <h1 className="font-medium text-[22px] leading-[20px] text-gray-900 hover:underline underline-offset-2">
          <Link href='/Pathfinding'>Path-finding</Link>
        </h1>
        <h1 className="font-medium text-[22px] leading-[20px] text-gray-900 hover:underline underline-offset-2">
        <Link href='/Sorting'>Sorting</Link>
        </h1>
        <img
          src="/github.svg"
          alt="github"
          className="w-[24px] h-[24px]  object-contain"
        />
        
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
