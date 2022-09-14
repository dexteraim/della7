import Header_image from '/images/header/header.png';
import Header_image_mobile from '/images/header/header_mobile.png';

const Header = () => {
  return (
    <div className="mx-auto flex max-w-[1024px] flex-col pt-[43.95px] text-primary-blue">
      <div className="fonr-Helvetica pb-[24px] text-center text-[48px] font-bold lg:text-[61px]">
        Providing IT Solutions for Busniesses
      </div>
      <div className="px-5 pb-[38px] text-center text-xl font-semibold md:pb-[90px]">
        Automation, Web Applications, Apps and Digitalisation.
      </div>
      <img src={Header_image} alt="header image" className="hidden md:block" />
      <img src={Header_image_mobile} alt="header image" className="h-auto max-w-full md:hidden" />
    </div>
  );
};

export default Header;
