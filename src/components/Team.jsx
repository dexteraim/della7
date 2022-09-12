const Team = () => {
  const members = [
    {
      id: 1,
      name: "JJarno",
      image: "/images/team/cooper.png",
      role: "founder",
      email: "jamcooperk@mail.com",
    },
    {
      id: 2,
      name: "Florence Klocko",
      image: "/images/team/klocko.png",
      role: "co-founder",
      email: "florenceklocko@mail.com",
    },
    {
      id: 3,
      name: "Johnny Trantow",
      image: "/images/team/johnny.png",
      role: "developer",
      email: "johnnytrantow@mail.com",
    },
    {
      id: 4,
      name: "Melissa Aniston",
      image: "/images/team/aniston.png",
      role: "developer",
      email: "melissaaniston@mail.com",
    },
    {
      id: 5,
      name: "Hector Ruecker",
      image: "/images/team/cooper.png",
      role: "designer",
      email: "hectorruecker@mail.com",
    },
    {
      id: 6,
      name: "Cristina Parker",
      image: "/images/team/klocko.png",
      role: "developer",
      email: "cristinaparker@mail.com",
    },
  ];

  return (
    <div className="">
      <div className="py-8 text-center text-4xl font-bold">Meet our team</div>
      <div className="flex flex-wrap items-start justify-center gap-7 py-7 md:flex-row md:flex-wrap lg:justify-between">
        {members.map(({ id, name, image, role, email }) => {
          return (
            <div key={id} className="w-fit pb-8">
              <div className="">
                <img
                  className="w-[300px] pb-5 lg:w-[310px]"
                  src={image}
                  alt={name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold ">{name}</div>
                <div className="pb-3 text-2xl font-semibold uppercase">
                  {role}
                </div>
                <div className="text-md font-semibold">{email}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
