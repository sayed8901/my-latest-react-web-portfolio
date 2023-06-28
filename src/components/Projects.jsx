import React from "react";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

// images
import Img1 from "../assets/Project-1-Summer-Champ.jpg";
import Img2 from "../assets/Project-2-ToyDoll-FairyWorld.jpg";
import Img3 from "../assets/Project-3-My-AirCNC.jpg";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Section info */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="h2 text-accent">
                Latest <span className="text-gradient">Works</span>
              </h2>
              <p className="mt-4 mb-4 leading-none lg:leading-loose">
                I am always enthusiastic about learning new tech and also try to
                implement them in my recent projects.{" "}
              </p>
              <button className="btn btn-sm">View all projects</button>
            </motion.div>

            {/* project 1 */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />

              <div>
                <div>
                  {/* pre-title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">Summer Champ</span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-600 z-50">
                    <span className="text-xl text-white">A summer time school sports camping site.</span>
                  </div>
                </div>
                 <Link to={'./ProjectDetails/Project1.jsx'} className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-700 z-50 btn btn-sm">View Details</Link>
              </div>
            </motion.div>

            {/* project 2 */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />

              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Toy Doll Fairy World</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">Project Title</span>
              </div>
            </motion.div>

            {/* project 3 */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />

              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">AirCNC</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">Project Title</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
