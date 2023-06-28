import React from "react";

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
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about-img bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>

          {/* text */}
          <div>
            <h2>About me</h2>
            <h3>
              I have completed more than 20 projects utilizing my acquired more.
            </h3>
            <p>
              Among them, I have made some e-commerce sites, a job portal, a
              newspaper site, some portfolio sites, and many more.
            </p>

            {/* stats */}
            <div className="flex gap-x-6 md:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Full <br /> Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Single <br /> Projects <br /> Done
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Challenging <br /> Assignments <br /> Submitted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
