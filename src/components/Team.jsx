const Team = () => {
    const members = [
        {
            id: 1,
            name: 'JJarno',
            image: '/images/team/cooper.png',
            role: ' ',
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
        <div className="">
            <div className="font-bold text-center text-4xl py-8">Meet our team</div>
            <div className="py-7 flex flex-wrap gap-5 justify-center lg:justify-between items-start md:flex-row md:flex-wrap">
                {members.map(({ id, name, image, role, email }) => {
                    return (
                        <div key={id} className="w-fit rounded-2xl  ">
                            <div className="">
                                <img className="py-2 w-[300px] lg:w-[310px]" src={image} alt={name} />
                            </div>
                            <div className="pb-8 flex flex-col justify-between">
                                <div className="text-2xl font-semibold py-5">
                                    {name}
                                </div>
                                <div className="flex gap-6 text-base font-bold justify-between">
                                    <div className="text-2xl font-semibold">{role}</div>
                                </div>
                                <div className="flex gap-6 text-base font-bold justify-between">
                                    <div className="text-md font-semibold">{email}</div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default Team;