import Slider from 'infinite-react-carousel';

const Clients = () => {
  const client = [
    {
      id: 1,
      clientName: '/images/clients/Google.png',
    },
    {
      id: 2,
      clientName: '/images/clients/Lenovo.png',
    },
    {
      id: 3,
      clientName: '/images/clients/Paypal.png',
    },
    {
      id: 4,
      clientName: '/images/clients/Samsung.png',
    },
    {
      id: 5,
      clientName: '/images/clients/Shopify.png',
    },
    {
      id: 6,
      clientName: '/images/clients/Slack.png',
    },
  ];
  const settings1 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 2,
  };

  const settings2 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 4,
  };

  const settings3 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 5,
  };
  return (
    <div id="clients" className="pb-[48px] pt-[2rem] lg:pb-[215px]">
      <h1 className="pb-[17px] text-center text-[26px] font-semibold text-primary-blue">
        Our clients
      </h1>
      <div className="flex flex-col justify-center md:hidden">
        <Slider {...settings1}>
          {client.map(({ id, clientName }) => {
            return <img key={id} src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
      <div className="hidden flex-col justify-center md:flex lg:hidden">
        <Slider {...settings2}>
          {client.map(({ id, clientName }) => {
            return <img key={id} src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
      <div className="hidden flex-col justify-center lg:flex">
        <Slider {...settings3}>
          {client.map(({ id, clientName }) => {
            return <img key={id} src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
