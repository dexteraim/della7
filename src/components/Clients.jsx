import Slider from 'infinite-react-carousel';

const Clients = () => {
  const settings2 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 5,
  };
  return (
    <>
      <h1 className="tex-[26px] text-center font-semibold text-primary-blue">
        Our clients
      </h1>
      <div className="flex flex-col justify-center text-center text-xs font-semibold lg:hidden">
        <Slider {...settings2}>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
        </Slider>
      </div>
    </>
  );
};

export default Clients;
