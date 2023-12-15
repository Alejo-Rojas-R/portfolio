import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Checkmark } from './Checkmark';
import Pfp from '../../public/profile-pic.webp';

export const Body = () => {

    return (
        <>
            <div className='bg-[url(/banner.webp)] bg-cover bg-center w-full max-w-[1920px] m-auto'>
                <div id='about' className='pt-40 pb-10 px-5 mx-auto w-full max-w-[1040px]'>
                    <div className='flex flex-col'>
                        <div className=''>
                            <h3 className='flex text-2xl my-3 font-mono text-red-600 bg-black px-2 relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white'>Hi, my name is</h3>
                            <h2 className='text-shadow text-4xl py-2 text-white font-semibold'>Alejandro Rojas</h2>
                            <div className='pt-3 max-w-[380px]'>
                                <p className='text-shadow text-2xl text-white'>
                                    I'm a software developer based in Medellín, Colombia.
                                </p>
                            </div>
                        </div>
                        <div className='text-5xl flex justify-center gap-8 pt-8 text-red-600'>
                            <a className='transition ease-in-out hover:scale-110' href='https://github.com/Alejo-Rojas-R'><AiFillGithub /></a>
                            <a className='transition ease-in-out hover:scale-110' href='https://www.linkedin.com/in/alejandro-rojas-rodriguez/'> <AiFillLinkedin /></a>
                            <a className='transition ease-in-out hover:scale-110' href='mailto:alejandrorojas1152@gmail.com'> <AiFillMail /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='projects' className='bg-black text-red-600'>
                <div className='w-full max-w-[1040px] py-14 px-5 m-auto'>
                    <h2 className='flex flex-col mx-auto mb-5 text-4xl text-shadow font-semibold'>Projects</h2>
                    <Projects />
                </div>
            </div>

            <div id='experience' className='bg-gray-700 text-red-600 shadow-inner shadow-black'>
                <div className='flex flex-col w-full max-w-[1040px] py-14 px-5 mx-auto'>
                    <h2 className='text-4xl text-shadow font-semibold'>Profesional Experience</h2>
                    <p className='text-white text-shadow mt-4'>
                        <span className='text-2xl'>Full Stack Developer </span><br />
                        <span className='opacity-75'>Talent.com </span>
                        <span className='opacity-50'>| 2020 - 2023</span>
                    </p>
                    <ul className='text-white list-inside mt-4 text-shadow'>
                        <li className='flex'><Checkmark /><span>Develop and maintain some of the company's PHP backend features with great attention to the code's functionality and readability.</span></li>
                        <li className='flex'><Checkmark /><span>Analyze and extract relevant data for the organization from MySQL and ElasticSearch databases.</span></li>
                        <li className='flex'><Checkmark /><span>Updating and altering application features to enhance performance and following SEO principles by analyzing pages with Lighthouse.</span></li>
                        <li className='flex'><Checkmark /><span>Develop interfaces using web technologies such as HTML, CSS, and JavaScript and ensure its responsivity.</span></li>
                        <li className='flex'><Checkmark /><span>Collaborate with the design team to ensure that the interface integrates correctly.</span></li>
                        <li className='flex'><Checkmark /><span>Explain, share and demo the work and ideas to the Product Owners and other peers.</span></li>
                    </ul>
                </div>
            </div>

            <div id='skills' className='bg-black'>
                <div className='flex flex-col w-full max-w-[1040px] py-14 px-5 mx-auto'>
                    <h2 className='text-4xl text-red-600 text-shadow font-semibold'>Skills</h2>
                    <Skills />
                </div>
            </div>

            <div id='studies' className=' bg-gray-700'>
                <div className='flex flex-col w-full max-w-[1040px] py-14 px-5 mx-auto'>
                    <h2 className='text-4xl text-shadow text-red-600 font-semibold'>Studies & Certificates</h2>
                    <p className='text-white text-shadow mt-4'>
                        <span className='text-2xl'>Systems Engineer</span><br />
                        <span className='opacity-75'>Metropolitan Technological Institute </span>
                        <span className='opacity-50'>| 2014 - 2024</span>
                    </p>
                    <p className='text-white text-shadow mt-4'>
                        <span className='text-2xl'>Code and Programming Bootcamp - Backend</span><br />
                        <span className='opacity-75'>MAKAIA </span>
                        <span className='opacity-50'>| 2023 - 2024</span>
                    </p>
                    <p className='text-white text-shadow mt-4'>
                        <span className='text-2xl'>Scrum Foundation Professional Certificate</span><br />
                        <span className='opacity-75'>CertiProf International </span>
                        <span className='opacity-50'>| 2023 </span>
                    </p>
                    <p className='text-white text-shadow mt-4'>
                        <span className='text-2xl'>C2 English Certificate</span><br />
                        <span className='opacity-75'>EF SET </span>
                        <span className='opacity-50'>| 2023 </span>
                    </p>
                </div>
            </div>

            <div id='about-me' className='bg-black shadow-inner shadow-black'>
                <div className='flex flex-row w-full max-w-[1040px] py-14 px-5 mx-auto grid md:grid-cols-4 sm:col-span-3 gap-8'>
                    <div className='flex flex-col md:col-span-3 sm:col-span-2 align-center'>
                        <h2 className='text-4xl text-shadow text-red-600 font-semibold'>About</h2>
                        <p className='text-white mt-5 text-shadow'>
                            I have always been passionate about creativity and computing.
                            When I was little I learned to draw before I learned to speak and I have always alternated between pencil and mouse.
                        </p>
                        <p className='text-white mt-4 text-shadow'>
                            Nowadays I am not only passionate about programming languages, but also speaking languages.
                            I'm C2 in English and I'm learning German. I'm also wrapping up my System Engineer title at the university.
                        </p>
                        <p className='text-white mt-4 text-shadow'>
                            I'm driven to be creative, honest and passionate about meeting goals and supporting others to do so.
                        </p>
                        <p className='text-white mt-4 text-shadow'>
                            If you'd like to collaborate let's connect and code something awesome together!
                        </p>
                    </div>
                    <div className='w-100 h-100 m-auto col-span-1'>
                        <img src={Pfp} className='rounded-full object-cover' alt='' />
                    </div>
                </div>
            </div>

            {/*
            <div id='contact' className='bg-black text-red-600 '>
                <div className='flex flex-col w-full max-w-[1040px] py-10 px-10 mx-auto'>
                    <h2 className='text-4xl text-shadow font-semibold'>Contact</h2>
                    <p className='text-white mt-2 text-shadow'>
                        ...
                    </p>
                </div>
            </div>
            */}
        </>
    )
}
