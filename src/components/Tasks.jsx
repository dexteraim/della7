import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Tasks = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 2560, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="pb-[32px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoplay={true}
          autoplaySpeed="1"
          renderButtonGroupOutside={true}
        >
          <div className="justify-center py-[72px] text-center text-[48px] text-primary-blue">
            Web Applications
          </div>
          <div className="justify-center py-[72px] text-center text-[48px] text-primary-blue">
            Apps
          </div>
          <div className="justify-center py-[72px] text-center text-[48px] text-primary-blue">
            Digitalisation
          </div>
          <div className="justify-center py-[72px] text-center text-[48px] text-primary-blue">
            Automation
          </div>
          <div className="justify-center py-[72px] text-center text-[48px] text-primary-blue">
            Contract Us
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Tasks;
