import { BsArrowRight } from "react-icons/bs";


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Proident irure magna ea',
            image: '/images/projects/infoi.png',
            demo: 'https://www.info2i.com/',
            type: 'Web Application',
        },
        {
            id: 2,
            title: 'Proident irure magna ea',
            image: '/images/projects/amarok.png',
            demo: 'https://aimdexter.github.io/AMAROQ/',
            type: 'Automtion',
        },
        {
            id: 3,
            title: 'Proident irure magna ea',
            image: '/images/projects/space.png',
            demo: 'https://aimdexter.github.io/Space-Travel/index.html',
            type: 'App',
        },
        {
            id: 4,
            title: 'Proident irure magna ea',
            image: '/images/projects/human.png',
            demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
            type: 'Digitalization',
        },
    ];
    return (
        <div className="pt-8">
            <div className="flex justify-between lg:pb-10 lg:flex lg:items-center lg:justify-between">
                <div className="font-bold text-4xl">Projects</div>
                <a href="https://github.com/" className='flex text-white bg-blue-500 gap-5 py-2 px-4 rounded-full items-center w-fit' target="_blank">
                    <span className="text-md">View All Projects</span>
                    <BsArrowRight />
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
                                <div className="text-2xl font-semibold py-5">
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