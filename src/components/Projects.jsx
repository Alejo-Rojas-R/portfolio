import EShop from '../../public/e-shop.png';
import Game from '../../public/matching-game.png';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    var projects = [
        {
            title: 'E-Commerce Site',
            link: 'https://e-shop-arojas.netlify.app/',
            thumbnail: EShop,
            description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            badges: ['React', 'Bootstrap', 'API'],
            github: 'https://github.com/Alejo-Rojas-R/shop-v1-fe',
        },
        {
            title: 'Matching Game',
            link: '',
            thumbnail: Game,
            description: 'Small minigame where the goal is to match the items by pressing and dragging the mouse over those that match.',
            badges: ['React'],
            github: 'https://github.com/Alejo-Rojas-R/react-frogs-game',
        },
        {
            title: '',
            link: '',
            thumbnail: '',
            description: '',
            badges: [],
            github: '',
        }
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-100 mx-auto max-w-[1040px]'>
            {projects.map((project, index) => (
                (project.title != '') &&
                <ProjectCard key={index}
                    link={project.link}
                    image={project.thumbnail}
                    title={project.title}
                    description={project.description}
                    badges={project.badges}
                    github={project.github}
                />
            ))}
        </div>
    )
}
