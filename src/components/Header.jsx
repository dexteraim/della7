import Header_image from "/images/header/header.png";
import Header_image_mobile from "/images/header/header_mobile.png";

const Header = () => {
  return (
    <div className="mx-auto flex max-w-[1024px] flex-col py-8">
      <div className="fonr-Helvetica text-center text-[48px] font-bold text-primary-blue lg:text-[57px]">
        Providing IT Solutions for Busniesses
      </div>
      <div className="py-5 text-center text-xl font-semibold text-blue-900">
        Automation, Web Applications, Apps and Digitalisation.
      </div>
      <img src={Header_image} alt="header image" className="hidden md:block" />
      <img
        src={Header_image_mobile}
        alt="header image"
        className="h-auto max-w-full md:hidden"
      />
    </div>
  );
};

export default Header;
