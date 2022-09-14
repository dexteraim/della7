import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Team = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="absolute top-[6rem] right-4 flex gap-[12px] text-[24px] md:top-[12rem]">
        {' '}
        <button className="" onClick={() => goToSlide(currentSlide - 1)}>
          {' '}
          <AiOutlineArrowLeft />{' '}
        </button>
        <button className="" onClick={() => goToSlide(currentSlide + 1)}>
          {' '}
          <AiOutlineArrowRight />{' '}
        </button>
      </div>
    );
  };

  const responsive = {
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 767, min: 425 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const members = [
    {
      id: 1,
      name: 'JJarno',
      image: '/images/team/cooper.png',
      role: 'founder',
      email: 'jamcooperk@mail.com',
    },
    {
      id: 2,
      name: 'Florence Klocko',
      image: '/images/team/klocko.png',
      role: 'co-founder',
      email: 'florenceklocko@mail.com',
    },
    {
      id: 3,
      name: 'Johnny Trantow',
      image: '/images/team/johnny.png',
      role: 'developer',
      email: 'johnnytrantow@mail.com',
    },
    {
      id: 4,
      name: 'Melissa Aniston',
      image: '/images/team/aniston.png',
      role: 'developer',
      email: 'melissaaniston@mail.com',
    },
    {
      id: 5,
      name: 'Hector Ruecker',
      image: '/images/team/cooper.png',
      role: 'designer',
      email: 'hectorruecker@mail.com',
    },
    {
      id: 6,
      name: 'Cristina Parker',
      image: '/images/team/klocko.png',
      role: 'developer',
      email: 'cristinaparker@mail.com',
    },
  ];

  return (
    <div id="team" className="relative mx-auto max-w-[1024px] px-4 pt-[88px] md:pt-[130px]">
      <div className="inline-block pb-[38px] text-[28px] font-bold text-primary-blue md:pb-[72px] md:text-center">
        Meet our team
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        renderButtonGroupOutside={true}
        centerMode={false}
        className=""
        adaptiveHeight={true}
        customButtonGroup={<ButtonGroup />}
      >
        {members.map(({ id, name, image, role, email }) => {
          return (
            <div key={id} className="rounded-md pr-2 pb-8 md:pl-0">
              <div className="">
                <img className="w-full rounded-md pb-5 lg:w-[310px]" src={image} alt={name} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="pt-[15.95px] pb-[11.05px] text-[20px] text-primary-blue">
                  {name}
                </div>
                <div className="pb-[16px] text-[16px] uppercase text-primary-blue">{role}</div>
                <div className="text-[16px] text-primary-blue">{email}</div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="hidden flex-wrap items-start justify-center gap-7 md:flex md:flex-row md:flex-wrap md:justify-between">
        {members.map(({ id, name, image, role, email }) => {
          return (
            <div key={id} className="w-fit rounded-md pb-8">
              <div className="">
                <img className="w-[343px] rounded-md pb-5 lg:w-[310px]" src={image} alt={name} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="pt-[15.95px] pb-[11.05px] text-[20px] text-primary-blue">
                  {name}
                </div>
                <div className="pb-[16px] text-[16px] uppercase text-primary-blue">{role}</div>
                <div className="text-[16px] text-primary-blue">{email}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
