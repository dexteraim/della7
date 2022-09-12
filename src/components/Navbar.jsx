import Logo from "/images/logo/logo.png";
import {
  AiOutlineClose,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineMenuFold,
  AiOutlineTeam,
} from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BsArrowRight, BsPeople } from "react-icons/bs";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  //Making the navbar bg color change from transparent to white when sroclling
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#FFFF") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          transition: "all 0.5s",
        }}
        className="sticky top-0 z-50 flex h-14 items-center justify-between px-4 py-12 transition duration-500 lg:items-center "
      >
        <HashLink smooth to="/#home">
          <h2 className="text-2xl font-bold">
            <img src={Logo} alt="" />
          </h2>
        </HashLink>
        <div
          onClick={() => setShowNav(!showNav)}
          className={`${
            showNav
              ? "left-0 z-10"
              : "transition-left -left-full lg:left-0 lg:top-0 lg:-z-10"
          } 
        fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white text-xl duration-500 
        lg:sticky  lg:h-fit lg:w-full lg:flex-row lg:items-center lg:justify-center lg:gap-6 lg:bg-transparent lg:text-sm lg:text-[16px] lg:font-semibold`}
        >
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: "lg:hidden" }}>
              <AiOutlineHome />
            </IconContext.Provider>
            <HashLink
              smooth
              to="/#home"
              className={(navData) =>
                navData.isActive ? "text-black" : "text-gray"
              }
            >
              Home
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: "lg:hidden" }}>
              <AiOutlineTeam />
            </IconContext.Provider>
            <HashLink
              smooth
              to="/#about"
              className={(navData) =>
                navData.isActive ? "text-black" : "text-gray"
              }
            >
              About Us?
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: "lg:hidden" }}>
              <BsPeople />
            </IconContext.Provider>
            <HashLink
              smooth
              className={(navData) =>
                navData.isActive
                  ? "text-black transition duration-500 dark:text-white"
                  : "text-gray"
              }
              to="/#clients"
            >
              Our Clients
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: "lg:hidden" }}>
              <MdOutlineCleaningServices />
            </IconContext.Provider>
            <HashLink
              smooth
              className={(navData) =>
                navData.isActive
                  ? "text-black transition duration-500 dark:text-white"
                  : "text-gray"
              }
              to="/#projects"
            >
              Projects
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: "lg:hidden" }}>
              <AiOutlineContacts />
            </IconContext.Provider>
            <HashLink
              smooth
              className={(navData) =>
                navData.isActive
                  ? "text-black transition duration-500 dark:text-white"
                  : "text-gray"
              }
              to="/#team"
            >
              Our Team
            </HashLink>
          </div>
        </div>
        <div className="z-50 hidden gap-5 lg:flex">
          <a
            target="_blank"
            rel="noreferrer"
            href="#hi"
            className="flex w-[150px] items-center justify-between gap-5 rounded-3xl border-2 border-black p-2"
          >
            Contact Us
            <BsArrowRight />
          </a>
        </div>
        <button className="z-10 lg:hidden">
          {showNav ? (
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <AiOutlineClose onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <AiOutlineMenuFold onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
