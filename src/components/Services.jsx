const Services = () => {
  const services = [
    {
      id: 1,
      service: 'Automation',
      image: '/images/services/automation.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl, morbi mauris ullamcorper. Nec, eu sed sagittis ac. Aliquam faucibus.',
    },
    {
      id: 2,
      service: 'Web Applications',
      image: '/images/services/web.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl, morbi mauris ullamcorper. Nec, eu sed sagittis ac. Aliquam faucibus.',
    },
    {
      id: 3,
      service: 'Apps',
      image: '/images/services/app.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl, morbi mauris ullamcorper. Nec, eu sed sagittis ac. Aliquam faucibus.',
    },
    {
      id: 4,
      service: 'Digitalisation',
      image: '/images/services/digitalisation.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl, morbi mauris ullamcorper. Nec, eu sed sagittis ac. Aliquam faucibus.',
    },
  ];

  return (
    <div className="mx-auto flex max-w-[1024px] flex-wrap items-center justify-between gap-[48px] px-4 pb-[88px]">
      {services.map(({ id, service, image, content }) => {
        return (
          <div key={id} className="">
            <div className="flex gap-[24px]">
              <img src={image} alt="service ison" className="h-[32px] w-[32px]" />
              <h1 className="text-[26px] text-primary-blue">{service}</h1>
            </div>
            <h2 className="w-[342px] pt-[18px] text-[16px] text-primary-blue opacity-[70%]">
              {content}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
