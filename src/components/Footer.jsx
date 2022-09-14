import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import LanguageToggle from './Languagetoggle';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <>
      <img className="w-screen pb-8 lg:pt-[72px]" src="/images/footer/team.png" alt="team" />
      <footer className="mx-auto max-w-[1024px] bg-white px-4 pt-[88px] text-primary-blue">
        <div className="mx-auto flex flex-col justify-between">
          <div className="flex flex-col gap-[40px] lg:flex-row lg:items-start lg:justify-between">
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="hidden justify-center self-center py-[68px] lg:flex lg:flex-1 lg:self-start lg:py-0"
            >
              <img className="h-[43.05px] w-[146.98px]" src="/images/logo/logo.png" alt="Della7" />
            </a>

            <div className="flex justify-around lg:flex-auto">
              <ul className="flex flex-col gap-[32px]">
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Our Clients
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Our Team
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-[32px]">
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <LanguageToggle />
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-[40px] lg:flex-1">
              <HashLink
                smooth
                to="#contact"
                className="flex w-full items-center justify-center gap-5 rounded-full border-[1px] border-primary-blue p-2"
              >
                Contact Us
                <BsArrowRight />
              </HashLink>
              <div className="hidden flex-col items-center gap-3 lg:items-start lg:pt-[91px]">
                <div className="pb-[3px] text-[16px]">Follow Us</div>
                <div className="flex gap-2 text-xl">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="#"
                    title="Facebook"
                    className="flex items-center p-1"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="#"
                    title="Twitter"
                    className="flex items-center p-1"
                  >
                    <AiFillTwitterCircle />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="#"
                    title="Instagram"
                    className="flex items-center p-1"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="#"
                    title="Instagram"
                    className="flex items-center p-1"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="#"
            className="flex justify-center space-x-3 self-center py-[68px] lg:hidden lg:justify-start"
          >
            <img className="h-[43.05px] w-[146.98px]" src="/images/logo/logo.png" alt="Della7" />
          </a>
        </div>
        <div className="py-6 pt-10 text-center text-sm text-gray-400">
          © 2022 Della7 - IT Solutions. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
