import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';
import noImage from '../../public/no-image.webp'

export const ProjectCard = ({ deploy_link, thumbnail_link, title, description, badges, github_link }) => {

    return (
        <div className='transition ease-in-out relative group flex flex-col items-center border rounded-lg bg-white max-w-[1040px] hover:scale-105 shadow-lg shadow-black'>
            <div className='transition ease-in-out group-hover:grayscale-0'>
                <img className='border-4 border-white rounded-lg' src={thumbnail_link != '' ? thumbnail_link : noImage} alt='' />
                <div className='transition ease-in-out flex flex-col text-8xl gap-6 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {deploy_link &&
                        <a className='transition ease-in-out m-auto hover:scale-110 text-red-600 bg-zinc-800 rounded-full' href={deploy_link} target='_blank'>
                            <AiFillPlayCircle />
                        </a>
                    }
                    {github_link &&
                        <a className='transition ease-in-out m-auto hover:scale-110 text-red-600 bg-zinc-800 rounded-full' href={github_link} target='_blank'>
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
