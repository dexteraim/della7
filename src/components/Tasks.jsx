import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      task: 'Web Applications',
    },
    {
      id: 2,
      task: 'Apps',
    },
    {
      id: 3,
      task: 'Digitalisation',
    },
    {
      id: 4,
      task: 'Automation',
    },
    {
      id: 5,
      task: 'Contract Us',
    },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 2560, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="hidden">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoplay={true}
          autoplaySpeed="1"
          className=""
          renderButtonGroupOutside={true}
        >
          {tasks.map(({ id, task }) => {
            return (
              <div
                key={id}
                className="justify-center py-[72px] text-center text-[48px] text-primary-blue"
              >
                {task}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Tasks;
