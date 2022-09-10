import { BsArrowRight } from "react-icons/bs";


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Proident irure magna ea',
            image: '/images/infoi.png',
            code: 'https://github.com/youssra-ghninou/i2i-infogerance',
            demo: 'https://www.info2i.com/',
            type: 'Web Application',
        },
        {
            id: 2,
            title: 'Proident irure magna ea',
            image: '/images/amarok.png',
            code: 'https://github.com/aimdexter/AMAROQ',
            demo: 'https://aimdexter.github.io/AMAROQ/',
            type: 'Automtion',
        },
        {
            id: 3,
            title: 'Proident irure magna ea',
            image: '/images/space.png',
            code: 'https://github.com/aimdexter/Space-Travel',
            demo: 'https://aimdexter.github.io/Space-Travel/index.html',
            type: 'App',
        },
        {
            id: 4,
            title: 'Proident irure magna ea',
            image: '/images/human.png',
            code: 'https://github.com/aimdexter/human_art_v2',
            demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
            type: 'Digitalization',
        },
    ];
    return (
        <div className="lg:pt-8">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="font-bold text-4xl  pt-8 ">Projects</div>
                <a href="https://github.com/aimdexter" className='flex lg:mt-8 text-white bg-blue-500 gap-5 mt-2 py-2 px-4 rounded-full  items-center w-fit' target="_blank">
                    <span className="font-bold text-xs">View All Projects</span>
                    <div className="">
                        <BsArrowRight />
                    </div>
                </a>
            </div>
            <div className="py-7 flex flex-wrap gap-5 justify-center lg:justify-between items-start md:flex-row md:flex-wrap">
                {projects.map(({ id, title, image, demo, type }) => {
                    return (
                        <div key={id} className="w-[450px] rounded-2xl  ">
                            <div className="">
                                <img className="py-2 w-[450px]" src={image} alt={title} />
                            </div>
                            <div className="pb-8">
                                <div className="text-2xl uppercase font-semibold py-5">
                                    {title}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                </div>
                                <div className="flex gap-6 text-base font-bold justify-between">
                                    <div className="text-xs font-normal text-gray-500">{type}</div>
                                    <a href={demo} target='_blank' className='pb-1 px-2 flex items-center gap-5 '>
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
}

export default Projects;