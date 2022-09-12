const Team = () => {
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
    <div className="mx-auto max-w-[1024px] px-4">
      <div className="pb-[38px] text-[28px] font-bold text-primary-blue md:pb-[72px] md:text-center">
        Meet our team
      </div>
      <div className="flex flex-wrap items-start justify-center gap-7 md:flex-row md:flex-wrap lg:justify-between">
        {members.map(({ id, name, image, role, email }) => {
          return (
            <div key={id} className="w-fit pb-8">
              <div className="">
                <img className="w-[343px] pb-5 lg:w-[310px]" src={image} alt={name} />
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
