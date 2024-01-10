import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';

export const ProjectCard = ({ link, image, title, description, badges, github }) => {

    return (
        <div className='transition ease-in-out relative group flex flex-col items-center border rounded-lg bg-white max-w-[1040px] hover:scale-105 shadow-lg shadow-black'>
            <div className='transition ease-in-out group-hover:grayscale-0'>
                <img className='border-4 border-white rounded-lg' src={image} alt='' />
                <div className='transition ease-in-out flex flex-col text-8xl gap-6 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {link &&
                        <a className='transition ease-in-out m-auto hover:scale-110 text-red-600 bg-zinc-800 rounded-full' href={link} target='_blank'>
                            <AiFillPlayCircle />
                        </a>
                    }
                    {github &&
                        <a className='transition ease-in-out m-auto hover:scale-110 text-red-600 bg-zinc-800 rounded-full' href={github} target='_blank'>
                            <AiFillGithub />
                        </a>
                    }
                </div>
            </div>
            <div className='p-4 leading-normal'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 font-normal text-gray-700'>{description}</p>
                <div className='flex flex-wrap gap-1'>
                    {badges.map((badge, index) => (
                        <span key={index} className='bg-zinc-500 text-white text-s font-semibold px-2.5 py-0.5 rounded shadow-sm shadow-gray-600 whitespace-nowrap'>{badge}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
