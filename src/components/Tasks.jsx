import Slider from 'infinite-react-carousel';

const Tasks = () => {
  const settings1 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 6,
  };
  const settings2 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 5,
  };
  return (
    <>
      <div className="hidden h-44 flex-col justify-center text-center text-xl font-semibold lg:flex">
        <Slider {...settings1}>
          <div className="w-full">Web Applications</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
          <div className="">Apps</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
          <div className="">Digitalisation</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
          <div className="">Contracts</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
          <div className="">Contracts 2</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
          <div className="">Contracts 2</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
          <div className="">Contracts 2</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-2 w-2" />
        </Slider>
      </div>
      <div className="flex h-44 flex-col justify-center text-center text-xs font-semibold lg:hidden">
        <Slider {...settings2}>
          <div className="w-full">Web Applications</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <div className="">Apps</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <div className="">Digitalisation</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <div className="">Contracts</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <div className="">Contracts 2</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <div className="">Contracts 2</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
          <div className="">Contracts 2</div>
          <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className="h-1 w-1" />
        </Slider>
      </div>
    </>
  );
};

export default Tasks;
