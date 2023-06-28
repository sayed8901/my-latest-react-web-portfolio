import React from "react";

// images
// import Image from "../assets/avatar.svg";
import Image from "../assets/Hero-image 2.jpg";

// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

// typing animation
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";

// veriants
// used for scroll animation
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] md:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 md:flex-row md:items-center md:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary md:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] font-bold leading-[0.8] md:text-[55px] xl:text-[90px]"
            >
              <span className="text-gradient font-secondary">Sayed</span> Hossain
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] md:text-[35px] xl:text-[65px] font-secondary font-semibold uppercase leading-[2]"
            >
              <span className="text-white mr-2">I am a </span>
              <TypeAnimation
                sequence={["Developer ", 2000, "Designer ", 2000, "Programmer ", 2000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-accent"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto md:mx-0"
            >
              Hello! This is Sayed from Narayanganj, Bangladesh. 
              <br />I have a deep passion in the web development. It gives me
              much excitement & also allows me to apply my creativity throughout
              my work.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto md:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto md:mx-0"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden md:flex flex-1"
          >
            <img src={Image} className="w-96 rounded-full mx-auto" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
