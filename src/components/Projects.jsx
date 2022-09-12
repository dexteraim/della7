import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="absolute top-2 right-4 flex gap-[12px] text-[24px]">
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
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const projects = [
    {
      id: 1,
      title: 'Proident irure magna ea',
      image: '/images/projects/infoi.png',
      demo: 'https://www.info2i.com/',
      type: 'Web Application',
    },
    {
      id: 2,
      title: 'Proident irure magna ea',
      image: '/images/projects/amarok.png',
      demo: 'https://aimdexter.github.io/AMAROQ/',
      type: 'Automtion',
    },
    {
      id: 3,
      title: 'Proident irure magna ea',
      image: '/images/projects/space.png',
      demo: 'https://aimdexter.github.io/Space-Travel/index.html',
      type: 'App',
    },
    {
      id: 4,
      title: 'Proident irure magna ea',
      image: '/images/projects/human.png',
      demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
      type: 'Digitalization',
    },
  ];
  return (
    <div className="relative mx-auto max-w-[1024px] px-4">
      <div className="flex items-center justify-between pb-[34px] lg:flex lg:items-center lg:justify-between lg:pb-10">
        <div className="text-[28px] text-primary-blue">Projects</div>
        <a
          href="https://github.com/"
          className="hidden w-fit items-center gap-5 rounded-full bg-blue-500 py-2 px-4 text-white lg:flex "
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-md">View All Projects</span>
          <BsArrowRight />
        </a>
      </div>
      <div className="md:hidden">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {projects.map(({ id, title, image, demo, type }) => {
            return (
              <div key={id} className="w-fit">
                <div className="">
                  <img className="" src={image} alt={title} />
                </div>
                <div className="">
                  <div className="pt-[32px] pb-[16px] text-[16px] text-primary-blue">{title}</div>
                  <div className="flex justify-between">
                    <div className="text-[14px] text-primary-blue opacity-[70%]">{type}</div>
                    <a
                      href={demo}
                      target="_blank"
                      className="flex items-center gap-5"
                      rel="noreferrer"
                    >
                      <div className="text-[14px] text-primary-blue">View Project</div>
                      <BsArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="hidden flex-wrap items-start justify-center gap-5 py-7 md:flex md:flex-row md:flex-wrap lg:justify-between">
        {projects.map(({ id, title, image, demo, type }) => {
          return (
            <div key={id} className="w-[450px]">
              <div className="">
                <img className="w-[450px] py-2" src={image} alt={title} />
              </div>
              <div className="pb-8">
                <div className="py-5 text-2xl font-semibold">{title}</div>
                <div className="flex flex-wrap gap-2"></div>
                <div className="flex justify-between gap-6 text-base font-bold">
                  <div className="text-xs font-normal text-gray-500">{type}</div>
                  <a
                    href={demo}
                    target="_blank"
                    className="flex items-center gap-5 px-2 pb-1 "
                    rel="noreferrer"
                  >
                    <div className=" text-xs">View Project</div>
                    <BsArrowRight />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
