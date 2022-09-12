import { FaFacebook } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <img className="w-screen pb-8" src="/images/footer/team.png" alt="team" />
      <footer className="divide-y bg-white px-4 text-black mx-auto max-w-[1024px]">
        <div className="mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <img src="/images/logo/logo.png" alt="Della7" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-8 text-sm sm:grid-cols-3 lg:w-2/3">
            <div className="space-y-3">
              <ul className="space-y-3">
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
            </div>
            <div className="space-y-3">
              <ul className="space-y-3">
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="#"
                    className="flex items-center gap-3"
                  >
                    EN
                    <div className="text-xl">
                      <RiArrowDownSLine />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between space-y-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="flex w-fit items-center gap-5 rounded-3xl border-2 border-black p-2"
              >
                Contact Us
                <BsArrowRight />
              </a>
              <div className="flex flex-col gap-3">
                <div className="0">Follow Us</div>
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
        </div>
        <div className="py-6 text-center text-sm text-gray-400">
          © 2022 Della7 - IT Solutions. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
