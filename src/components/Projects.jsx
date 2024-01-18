import game from '../../public/matching-game.webp';
import shopV1 from '../../public/e-shop.webp';
import shopV3 from '../../public/shop-v3.webp';
import shopV3api from '../../public/shop-v3-api.webp';
import portfolio from '../../public/portfolio.webp';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    var projects = [
        {
            title: 'Matching Game',
            link: 'https://alejo-rojas-r.github.io/react-frogs-game/',
            thumbnail: game,
            description: 'Small minigame where the goal is to match the items by pressing and dragging the mouse over those that match.',
            badges: ['React'],
            github: 'https://github.com/Alejo-Rojas-R/react-frogs-game',
        },
        {
            title: 'React E-Shop V1',
            link: 'https://e-shop-arojas.netlify.app/',
            thumbnail: shopV1,
            description: 'This site has features such as search by keyword and multiple categories. The data gets fetched from a placeholder API.',
            badges: ['React', 'Bootstrap', 'API'],
            github: 'https://github.com/Alejo-Rojas-R/shop-v1-fe',
        },
        {
            title: 'Portfolio Page',
            link: 'https://alejo-rojas-r.github.io/portfolio/',
            thumbnail: portfolio,
            description: 'Static site where I showcase my personal projects. Developed with React and Tailwind CSS',
            badges: ['React', 'Tailwind CSS'],
            github: 'https://github.com/Alejo-Rojas-R/portfolio',
        },
        {
            title: 'React E-Shop V2 Page',
            link: '',
            thumbnail: shopV3,
            description: 'Web site with grocery items and multiple features such as user authentication, search by keyword, review items, etc.',
            badges: ['React', 'Bootstrap', 'API', 'Redux Toolkit'],
            github: 'https://github.com/Alejo-Rojas-R/shop-v3-fe',
        },
        {
            title: 'Java E-Shop V2 API',
            link: '',
            thumbnail: shopV3api,
            description: 'API developed with Spring Framework and features JWT authentication.',
            badges: ['Java', 'Spring Boot', 'Spring Security', 'API', 'MySQL', 'Postman'],
            github: 'https://github.com/Alejo-Rojas-R/shop-v3-api',
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
            {projects.toReversed().map((project, index) => (
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
