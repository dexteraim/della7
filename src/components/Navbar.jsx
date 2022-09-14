import Logo from '/images/logo/logo.png';
import {
  AiOutlineClose,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineTeam,
} from 'react-icons/ai';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BsArrowRight, BsPeople } from 'react-icons/bs';
import LanguageToggle from './Languagetoggle';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  //Making the navbar bg color change from transparent to white when sroclling
  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#FFFF') : setnavColor('transparent');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          transition: 'all 0.5s',
        }}
        id="home"
        className="sticky top-0 z-50 flex h-14 items-center justify-between px-4 py-12 transition duration-500 lg:items-center 2xl:px-[10%]"
      >
        <HashLink smooth to="/#home">
          <img src={Logo} alt="" className="w-[146.98px]" />
        </HashLink>
        <div
          onClick={() => setShowNav(!showNav)}
          className={`${
            showNav ? 'left-0 z-10' : 'transition-left -left-full lg:left-0 lg:top-0 lg:-z-10'
          } 
        fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white text-xl 
        duration-500 lg:sticky lg:h-fit lg:w-fit lg:flex-row lg:items-center lg:justify-center lg:gap-[48px] lg:bg-transparent lg:text-[16px] xl:ml-[8rem]`}
        >
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: 'lg:hidden' }}>
              <AiOutlineHome />
            </IconContext.Provider>
            <HashLink smooth to="/#home" className="">
              Home
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: 'lg:hidden' }}>
              <AiOutlineTeam />
            </IconContext.Provider>
            <HashLink smooth to="/#about" className="">
              About Us?
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: 'lg:hidden' }}>
              <BsPeople />
            </IconContext.Provider>
            <HashLink
              smooth
              className={(navData) =>
                navData.isActive ? 'text-black transition duration-500 ' : 'text-gray'
              }
              to="/#clients"
            >
              Our Clients
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: 'lg:hidden' }}>
              <MdOutlineCleaningServices />
            </IconContext.Provider>
            <HashLink
              smooth
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={(navData) =>
                navData.isActive ? 'text-black transition duration-500 ' : 'text-gray'
              }
              to="/#projects"
            >
              Projects
            </HashLink>
          </div>
          <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
            <IconContext.Provider value={{ className: 'lg:hidden' }}>
              <AiOutlineContacts />
            </IconContext.Provider>
            <HashLink
              smooth
              className={(navData) =>
                navData.isActive ? 'text-black transition duration-500 ' : 'text-gray'
              }
              to="/#team"
            >
              Our Team
            </HashLink>
          </div>
          <HashLink
            smooth
            to="#contact"
            className="flex h-[50px] w-[194px] items-center justify-between gap-[46px] rounded-3xl border-2 border-black px-[24px] py-[16px] text-[16px] lg:hidden"
          >
            Contact Us
            <BsArrowRight />
          </HashLink>
        </div>
        <div className="z-50 hidden gap-2 lg:flex">
          <LanguageToggle />
          <HashLink
            smooth
            to="#contact"
            className="flex h-[50px] w-[194px] items-center justify-between gap-[46px] rounded-3xl border-2 border-black px-[24px] py-[16px] text-[16px]"
          >
            Contact Us
            <BsArrowRight />
          </HashLink>
        </div>
        <button className="z-10 lg:hidden">
          {showNav ? (
            <IconContext.Provider value={{ className: 'text-2xl' }}>
              <AiOutlineClose onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: 'text-2xl' }}>
              <AiOutlineMenu onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
