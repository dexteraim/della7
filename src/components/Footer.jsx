import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';


const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-white text-black">
            <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="_blank" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <img src="/images/logo/logo.png" alt="Della7" />
                    </a>
                </div>
                <div className="grid grid-cols-3 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
                    <div className="space-y-3">
                        <ul className="space-y-3">
                            <li>
                                <a rel="_blank" href="#">Home</a>
                            </li>
                            <li>
                                <a rel="_blank" href="#">About Us</a>
                            </li>
                            <li>
                                <a rel="_blank" href="#">Our Clients</a>
                            </li>
                            <li>
                                <a rel="_blank" href="#">Projects</a>
                            </li>
                            <li>
                                <a rel="_blank" href="#">Our Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <ul className="space-y-3">
                            <li>
                                <a rel="_blank" href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a rel="_blank" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="_blank" href="#" className="flex items-center gap-3">
                                    EN
                                    <div className="text-xl">
                                        <RiArrowDownSLine />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 flex flex-col justify-between">
                        <a rel="_blank" href="#" className="flex items-center gap-5 rounded-3xl border-2 p-2 border-black w-fit">
                            Contact Us
                            <BsArrowRight />
                        </a>
                        <div className="flex flex-col gap-3">
                            <div className="0">Follow Us</div>
                            <div className="flex gap-2 text-xl">
                                <a rel="_blank" href="#" title="Facebook" className="flex items-center p-1">
                                    <FaFacebook />
                                </a>
                                <a rel="_blank" href="#" title="Twitter" className="flex items-center p-1">
                                    <AiFillTwitterCircle />
                                </a>
                                <a rel="_blank" href="#" title="Instagram" className="flex items-center p-1">
                                    <AiFillInstagram />
                                </a>
                                <a rel="_blank" href="#" title="Instagram" className="flex items-center p-1">
                                    <AiFillGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 2022 Della7 - IT Solutions. All rights reserved.</div>
        </footer>
    );
}

export default Footer;