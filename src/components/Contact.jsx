import { BsArrowRight } from 'react-icons/bs';
import ContactImg from '/images/backgrounds/contact.svg';

const Contact = () => {
  return (
    <div className=" mx-auto max-w-[1024px] px-4  pt-[88px] text-center text-[26px] text-primary-blue md:flex md:items-start md:justify-between md:text-start lg:gap-[100px]">
      <div className="flex flex-1 flex-col gap-[40px] md:items-start">
        <h1 className="md:pr-5 md:text-[35px]">
          Let’s work together, email us or call us. We are here for you!
        </h1>
        <button className="mx-auto flex items-center justify-between gap-5 rounded-full border-2 border-primary-blue py-[16px] px-[24px] md:mx-0">
          <h2 className=" text-[16px]">Call Us 877-464-5874</h2>
          <BsArrowRight />
        </button>
      </div>
      <form className="mt-[49px] flex-1 md:mt-0" action="" method="POST">
        <input type="hidden" name="access_key" value="" />
        <div className=" flex flex-col-reverse items-start">
          <input
            id="Name"
            required
            name="Name"
            type="text"
            className="w-full border-b-[1px] border-primary-blue text-[16px] text-primary-blue opacity-[70%] md:w-full"
            placeholder="Enter your full name"
          />
          <label htmlFor="Name" className="text-[14px] uppercase text-primary-blue">
            Full Name
          </label>
        </div>
        <div className="mt-10 flex flex-col-reverse items-start md:w-full">
          <input
            id="email"
            required
            type="text"
            name="email"
            className="w-full border-b-[1px]  border-primary-blue text-[16px] text-primary-blue opacity-[70%] md:w-full"
            placeholder="Enter your email address"
          />
          <label htmlFor="email" className="text-[14px] uppercase text-primary-blue">
            Email Address
          </label>
        </div>
        <div className="mt-10 flex flex-col-reverse items-start">
          <textarea
            id="Message"
            rows="1"
            required
            type="message"
            name="message"
            className="w-full border-b-[1px] border-primary-blue text-[16px] text-primary-blue opacity-[70%] md:w-full"
            placeholder="Enter your message"
          />
          <label htmlFor="Message" className="text-[14px] uppercase text-primary-blue">
            Your Message
          </label>
        </div>
        <div className="flex items-center justify-start gap-2 pt-[41px] text-start text-[14px] lg:justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checked:bg-blue-500" />
            <div className="">
              <span className="">I have read and accept the </span>
              <a href="" className="underline">
                Terms & Privacy
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="hidden items-center gap-[48px] rounded-full bg-[#1C58FF] px-[24px] py-[16px] text-[16px] text-white lg:flex lg:gap-[35px]"
          >
            Send
            <BsArrowRight />
          </button>
        </div>
        <input type="hidden" name="redirect" value="" />
        <div className="flex w-full justify-end pt-[43px] lg:hidden">
          <button
            type="submit"
            className="flex items-center gap-[48px] rounded-full bg-[#1C58FF] px-[24px] py-[16px] text-[16px] text-white"
          >
            Send
            <BsArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
