import Slider from 'infinite-react-carousel';

const Clients = () => {
  const client = [
    {
      clientName: '/images/clients/Google.png',
    },
    {
      clientName: '/images/clients/Lenovo.png',
    },
    {
      clientName: '/images/clients/Paypal.png',
    },
    {
      clientName: '/images/clients/Samsung.png',
    },
    {
      clientName: '/images/clients/Shopify.png',
    },
    {
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
    <div className="pb-[48px] lg:pb-[215px]">
      <h1 className="tex-[26px] pb-[17px] text-center font-semibold text-primary-blue">
        Our clients
      </h1>
      <div className="flex flex-col justify-center md:hidden">
        <Slider {...settings1}>
          {client.map(({ clientName }) => {
            return <img src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
      <div className="hidden flex-col justify-center md:flex lg:hidden">
        <Slider {...settings2}>
          {client.map(({ clientName }) => {
            return <img src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
      <div className="hidden flex-col justify-center lg:flex">
        <Slider {...settings3}>
          {client.map(({ clientName }) => {
            return <img src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
