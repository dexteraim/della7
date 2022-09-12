import Header_image from "/images/header/header.png";
import Header_image_mobile from "/images/header/header_mobile.png";

const Header = () => {
  return (
    <div className="mx-auto flex max-w-[1024px] flex-col text-primary-blue">
      <div className="fonr-Helvetica text-center text-[48px] pt-[48px] pb-[28px] font-semibold lg:text-[57px]">
        Providing IT Solutions for Busniesses
      </div>
      <div className="text-center text-xl font-semibold px-5 pb-[38px]">
        Automation, Web Applications, Apps and Digitalisation.
      </div>
      <img src={Header_image} alt="header image" className="hidden md:block" />
      <img
        src={Header_image_mobile}
        alt="header image"
        className="h-auto max-w-full md:hidden pb-[88px]"
      />
    </div>
  );
};

export default Header;
