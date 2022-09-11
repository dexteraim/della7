import Header_image from '/images/header/header.png'
const Header = () => {
    return (
        <div className="py-8">
            <div className="text-center lg:text-[57px] text-primary-blue font-bold">
                Providing IT Solutions for Busniesses
            </div>
            <div className="text-center text-blue-900 font-semibold text-xl py-5">
                Automation, Web Applications, Apps and Digitalisation.
            </div>
            <img src={Header_image} alt="header image" className="w-screen" />
        </div>
    );
}

export default Header;