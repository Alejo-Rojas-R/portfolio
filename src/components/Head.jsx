import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Pfp from '../../public/profile-pic.jpg';
import { ProjectCard } from './ProjectCard';
import EShop from '../../public/e-shop.png';
import Game from '../../public/matching-game.png';

export const Head = () => {
    return (
        <>
            <nav className='px-10 py-9 flex justify-between'>
                <h1 className='text-xl font-burtons'>🜇</h1>
                <ul className='flex items-center gap-6'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#work'>Work</a></li>
                    <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
                    <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href='#'>Resume</a></li>
                </ul>
            </nav>

            <div id='about' className='px-10 mx-auto w-full max-w-[800px]'>
                <div className='flex flex-col-reverse justify-center text-center items-center md:flex-row md:text-left md:gap-20 gap-10 mb-10'>
                    <div className='w-[200px] mx-auto'>
                        <div className='relative w-[200px] h-[200px]'>
                            <img src={Pfp} className='absolute rounded-full object-cover' alt='' />
                        </div>

                        <div className='text-5xl flex justify-center gap-16 pt-6 text-gray-600'>
                            <a href='https://github.com/Alejo-Rojas-R'><AiFillGithub /></a>
                            <a href='https://www.linkedin.com/in/alejandro-rojas-rodriguez/'> <AiFillLinkedin /></a>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-2xl py-2 font-mono'>Hi, my name is</h3>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium'>Alejandro Rojas</h2>
                        <p className='text-md pt-5 leading-8 text-gray-800'>
                            I'm a Software Developer, I enjoy crafting innovative solutions and bringing ideas to life through code.
                            {/* I'm a Software Developer with more than 3 years of experience where I have contributed 
                            from backend to frontend in developing products under the Scrum framework. */}
                        </p>
                    </div>
                </div>
            </div>

            <div id='work' className='flex flex-col gap-5 bg-teal-600 w-100 py-10 px-5 mx-auto items-center'>
                <ProjectCard target='_blank' link={'https://e-shop-arojas.netlify.app/'} image={EShop} title={'E-Commerce Site'} description={'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order'} badges={['React', 'Bootstrap', 'API']} />
                <ProjectCard target='_blank' link={'#'} image={Game} title={'Matching Game'} description={'Small minigame where the goal is to match the items by pressing and dragging the mouse over those that match.'} badges={['React']} />
            </div>

            <div id='contact'>
                <h1>Contact</h1>
            </div>

        </>
    )
}
