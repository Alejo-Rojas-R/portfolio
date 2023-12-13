export const ProjectCard = ({ link, image, title, description, badges }) => {

    return (
        <a href={link} className='flex flex-row items-center border rounded-lg bg-white max-w-[800px] hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <img className='rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={image} alt='' />
            <div className='flex flex-col justify-between p-4 leading-normal'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
                <div className='flex gap-3'>
                    {badges.map((badge, index) => (
                        <span key={index} className='bg-teal-500 text-white text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>{badge}</span>
                    ))}
                </div>
            </div>
        </a>
    )
}
