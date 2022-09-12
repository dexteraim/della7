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

  const settings2 = {
    arrows: false,
    autoplay: true,
    duration: 100,
    slidesToShow: 2,
  };
  return (
    <div className="pb-[66px]">
      <h1 className="tex-[26px] text-center font-semibold text-primary-blue">Our clients</h1>
      <div className="flex flex-col justify-center lg:hidden">
        <Slider {...settings2}>
          {client.map(({ clientName }) => {
            return <img src={clientName} alt="" className="h-[112px] w-[232.4px]" />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
