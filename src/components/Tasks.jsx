import Slider from 'infinite-react-carousel';

const Tasks = () => {
    const settings1 = {
        arrows: false,
        autoplay: true,
        duration: 100,
        slidesToShow: 6
    };
    const settings2 = {
        arrows: false,
        autoplay: true,
        duration: 100,
        slidesToShow: 5
    };
    return (
        <>
            <div className="hidden lg:flex flex-col justify-center h-44 text-center text-xl font-semibold">
                <Slider {...settings1}>
                    <div className="w-full">
                        Web Applications
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />
                    <div className="">
                        Apps
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />
                    <div className="">
                        Digitalisation
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />
                    <div className="">
                        Contracts
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />
                    <div className="">
                        Contracts 2
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />
                    <div className="">
                        Contracts 2
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />
                    <div className="">
                        Contracts 2
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-2 h-2' />

                </Slider>
            </div>
            <div className="lg:hidden flex flex-col justify-center h-44 text-center text-xs font-semibold">
                <Slider {...settings2}>
                    <div className="w-full">
                        Web Applications
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />
                    <div className="">
                        Apps
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />
                    <div className="">
                        Digitalisation
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />
                    <div className="">
                        Contracts
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />
                    <div className="">
                        Contracts 2
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />
                    <div className="">
                        Contracts 2
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />
                    <div className="">
                        Contracts 2
                    </div>
                    <img src="/images/carousel/dot-svgrepo-com.svg" alt="" className='w-1 h-1' />

                </Slider>
            </div>
        </>
    );
}

export default Tasks;