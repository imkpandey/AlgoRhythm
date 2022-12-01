"use client";

import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion";

const Hero = () => (
  <section className="sm:py-16 sm:pl-16 xs:py-8 py-12 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1440px] w-full mx-auto flex flex-col"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className="font-bold lg:text-[144px] md:text-[120px] sm:text-[80px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-gray-900"
        >
          ALGORITHM VISUALIZER
        </motion.h1>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[auto] -mt-[300px]">
          <img
            src="/abstract.png"
            alt="cover"
            className="w-full h-[100%] object-cover z-0 relative"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className=" mt-[250px] flex justify-center z-10"
      >
        <a href="#About">
          <img
            src="/double-down.png"
            alt="scroll"
            className=" h-[35px] w-[40px] object-cover relative z-0"
          />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
