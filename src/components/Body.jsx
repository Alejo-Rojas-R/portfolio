import { Projects } from './Projects';
import { Skills } from './Skills';
import { Checkmark } from './Checkmark';
import Pfp from '../../public/profile-pic.webp';
import { SectionWrapper } from './SectionWrapper';
import { SocialIcons } from './SocialIcons';

export const Body = () => {

  return (
    <>
      <div className='bg-zinc-600 bg-[url(/banner.webp)] bg-cover bg-center w-full max-w-[1920px] m-auto bg-blend-hard-light'>
        <div className='pt-16 sm:pt-32 pb-10 px-5 mx-auto w-full max-w-[1040px]'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3'>
              <div className='font-mono'>
                <h3 className='flex text-2xl my-3 text-blue-500 bg-black px-2 relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-blue-500'>Hello! my name is</h3>
                <h2 className='text-shadow text-4xl py-2 text-white font-semibold'>Alejandro Rojas</h2>
                <div className='pt-3 max-w-[380px]'>
                  <p className='text-shadow text-2xl text-white'>
                    I'm a software developer based in Medellín, Colombia.
                  </p>
                </div>
              </div>
            </div>
            <div className='invisible h-0 md:h-auto md:visible col-span-1'>
              <img src={Pfp} className='rounded-full object-cover shadow-lg shadow-black' alt='' />
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>

      <SectionWrapper title={'Projects'} backgroundShade={'700'}>
        <Projects />
      </SectionWrapper>

      <SectionWrapper title={'Work Experience'} backgroundShade={'600'}>
        <>
          <p className='text-white text-shadow text-lg'>
            <span className=''>Full Stack Developer </span><br />
            <span className='opacity-75'>Talent.com </span>
            <span className='opacity-50'>| 2020 - 2023</span>
          </p>
          <ul className='text-white list-inside text-shadow leading-8 text-lg'>
            <li className='flex'><Checkmark /><span>Develop new features and maintain existing ones of the company's Backend, ensuring functionality, readability of the code, working hand in hand with the design team to integrate the interface correctly.</span></li>
            <li className='flex'><Checkmark /><span>Participate in development at the Back and Front level for projects in production, using web technologies such as Javascript, PHP, HTML and CSS, following the team and client specifications, and providing responsive interfaces.</span></li>
            <li className='flex'><Checkmark /><span>Evaluate, update and modify some functionalities of the application by optimizing its performance and efficiency following SEO practices with the support of reports in Lighthouse and Screaming Frog.</span></li>
            <li className='flex'><Checkmark /><span>Use MySQL databases to perform analysis and extraction of relevant information for the organization.</span></li>
          </ul>
        </>
      </SectionWrapper>

      <SectionWrapper title={'Tech Skills'} backgroundShade={'700'}>
        <Skills />
      </SectionWrapper>

      <SectionWrapper title={'Education and Certificates'} backgroundShade={'600'}>
        <>
          <p className='text-white text-shadow text-lg'>
            <span className=''>Bachelor of Science in Software Engineering</span><br />
            <span className='opacity-75'>Instituto Tecnológico Metropolitano</span>
            <span className='opacity-50'>| 2022 - 2024 (in progress)</span>
          </p>
          <p className='text-white text-shadow text-lg'>
            <span className=''>Code and Programming Bootcamp - Backend</span><br />
            <span className='opacity-75'>MAKAIA </span>
            <span className='opacity-50'>| 2023 - 2024</span>
          </p>
          <p className='text-white text-shadow text-lg'>
            <span className=''>Scrum Foundation Professional Certificate</span><br />
            <span className='opacity-75'>CertiProf International </span>
            <span className='opacity-50'>| 2023 </span>
          </p>
          <p className='text-white text-shadow text-lg'>
            <span className=''>C2 English Certificate</span><br />
            <span className='opacity-75'>EF SET </span>
            <span className='opacity-50'>| 2023 </span>
          </p>
        </>
      </SectionWrapper>

      <SectionWrapper title={'About'} backgroundShade={'700'}>
        <div className='flex flex-row grid md:grid-cols-4 sm:col-span-3 gap-8'>
          <div className='flex flex-col md:col-span-3 sm:col-span-2 align-center gap-8 leading-8'>
            <p className='text-white text-shadow text-lg'>
              I am a bilingual Software Developer oriented to web platforms, with 3 years of work experience in PHP, JavaScript, HTML, CSS, MySQL. Currently, apart from studying my last semesters of Systems Engineering, I dedicate my free time to studying Java (Spring), React.js, Node.js, RESTful APIs, design patterns, unit tests, Bootstrap and Tailwind.
            </p>
            <p className='text-white text-shadow text-lg'>
              I have had the opportunity to participate in a variety of projects, implementing the agile methodology and strengthening my knowledge, collaborative work skills, problem solving and critical thinking.
            </p>
            <p className='text-white text-shadow text-lg'>
              Creative, passionate about generating innovative technological solutions, guaranteeing the implementation of functionalities adjusted to the needs of each project. I am currently interested in job opportunities that allow me to continue applying my knowledge at the Full-Stack development level within different work teams, adding value to web creation and optimization.
            </p>
          </div>
          <div className='w-100 h-100 m-auto col-span-1'>
            <img src={Pfp} className='rounded-full object-cover shadow-lg shadow-black' alt='' />
            <SocialIcons />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
