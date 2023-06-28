import React from "react";

// image
// import Image from "../assets/about-image.jpg";

// countup
import CountUp from "react-countup";

// intersection observer
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section mn-32" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 gap-x-6 md:flex-row md:items-center md:gap-x-10 md:gap-y-0 min-h-[105vh]">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about-img bg-contain bg-no-repeat mix-blend-lighten h-[520px]"
          >
            {/* <img
              className="rounded-3xl mix-blend-lighten h-[380px] md:h-[520px] mx-auto"
              src={Image}
              alt=""
            /> */}
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I have completed more than 20 projects.
            </h3>
            <p className="mb-6">
              Among them, I have made some e-commerce sites, a job portal, a
              newspaper site, some portfolio sites, and many more.
            </p>

            {/* stats */}
            <div className="flex gap-x-6 md:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Tasks <br /> Done
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Assignments <br /> Submitted
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
