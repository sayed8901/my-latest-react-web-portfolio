import React from "react";
// importing icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav items */}
        <div className="w-full bg-black/20 h-[72px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            title="Home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
            // to show active link at home btn from the very beginning 
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            title="About me"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            title="Skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="projects"
            title="My Projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            title="Contact Me"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
