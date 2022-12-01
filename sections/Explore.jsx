"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";

const Explore = () => (
  <section className=" sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={{ staggerContainer }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1440px] w-full mx-auto flex flex-col justify-center items-center"
    >
      <TypingText title="| How to Use" />

      <motion.h1
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="mt-[20px] font-bold text-[40px] text-left text-gray-900"
      >
        Watch the video below on how to use this tool
      </motion.h1>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="placeholder.webp"
        alt="placeholder"
        className="py-12 max-h-[80%] max-w-[70%] z-10"
      />
      <motion.h3
        variants={fadeIn("up", "tween", 0.3, 1)}
        className=" -mb-[20px] flex justify-center font-medium text-gray-900"
      >
        Made with
        <span className="px-2 relative">
          <img src="/heart.svg" alt="heart" className="h-[24px] w-[24px]" />
        </span>{" "}
        and{" "}
        <span className="px-2 relative">
          <img src="/react.svg" alt="heart" className="h-[24px] w-[24px]" />
        </span>
      </motion.h3>
    </motion.div>
  </section>
);

export default Explore;
