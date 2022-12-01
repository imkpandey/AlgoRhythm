"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";

const About = () => (
  <section
    id="About"
    className=" sm:p-16 xs:p-8 px-6 py-12 mt-[200px] relative z-10"
  >
    <div className="gradient-02 z-0" />

    <motion.div
      variants={{ staggerContainer }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1440px] w-full mx-auto flex flex-row"
    >
      <div className="flex flex-col">
        <TypingText title="| About AlgoRhythm" />

        <motion.h1
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="mt-[20px] font-bold text-[40px] text-left text-gray-900"
        >
          Visualize the world of algorithms
        </motion.h1>

        <motion.p
          variants={fadeIn("right", "tween", 0.3, 1)}
          className=" max-w-[100%] mt-[40px] font-normal text-[25px] text-gray-900"
        >
          Welcome to AlgoRhythm, a web-based visualizer tool that generates
          beautiful simulations for <span className="font-bold">Sorting</span>{" "}
          and <span className="font-bold">Path-finding</span> algorithms.
          <br />
          <br />
          Choose one of the following categories to get started.
        </motion.p>
        <div className="py-8 max-w-[90%] flex justify-start gap-10">
          <Link href="/Pathfinding">
            <motion.button
              variants={fadeIn("right", "tween", 0.2, 1)}
              type="button"
              className=" h-fit py-4 px-6 bg-purple-300 rounded-[32px] gap-[12px]"
            >
              <span className="font-medium text-[20px] text-gray-900">
                Path-finding
              </span>
            </motion.button>
          </Link>
          <Link href="/Sorting">
            <motion.button
              variants={fadeIn("right", "tween", 0.3, 1)}
              type="button"
              className="h-fit py-4 px-6 bg-blue-300 rounded-[32px] gap-[12px] "
            >
              <span className="font-medium text-[20px] text-gray-900">
                Sorting
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
      <motion.div variants={planetVariants("right")}>
        <img
          src="/planet.png"
          alt="about"
          className="-mt-[120px] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
