import { Projects } from './Projects';
import { Skills } from './Skills';
import { Checkmark } from './Checkmark';
import Pfp from '../../public/profile-pic.webp';
import { SectionWrapper } from './SectionWrapper';
import { SocialIcons } from './SocialIcons';
import { ExperienceCard } from './ExperienceCard';
import { EducationCard } from './EducationCard';

import Makaia from '../../public/makaia.webp';
import Efset from '../../public/efset.webp';
import Itm from '../../public/itm.webp';
import Talent from '../../public/talent.webp';
import CertiProf from '../../public/certiprof.webp';

export const Body = () => {

  return (
    <>
      <div className='bg-gradient-to-r from-blue-800 to-blue-950 w-full m-auto'>
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

      <SectionWrapper title={'About'} backgroundShade={'600'}>
        <div className='flex flex-col align-center gap-8 leading-8 text-lg text-white text-shadow text-justify leading-8'>
          <p>
            I am a bilingual Software Developer oriented to web platforms, with 3 years of work experience in PHP, JavaScript, HTML, CSS, MySQL.
            I've had the opportunity to participate in a variety of projects, implementing agile methodologies and strengthening my soft skills in continuos learning, collaborative work, problem solving and critical thinking.
            Currently, apart from studying my last semesters of Systems Engineering.
            I dedicate my free time to practice Java (Spring), React.js, Node.js, Typescript, design patterns and unit tests.
          </p>
          <p>
            I'm creative and passionate about generating innovative technological solutions, guaranteeing the implementation of functionalities adjusted to the needs of each project. I am currently interested in job opportunities that allow me to continue applying my knowledge at the Full-Stack development level within different work teams, adding value to web creation and optimization.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper title={'Projects'} backgroundShade={'700'}>
        <Projects />
      </SectionWrapper>

      <SectionWrapper title={'Commercial Experience'} backgroundShade={'600'}>
        <ExperienceCard title={'Full-Stack Developer'} company={'Talent.com'} date={'2020 - 2023'} url={'https://talent.com/'} logo={Talent}
          description={
            <ul className='text-white list-inside text-shadow leading-8 text-lg text-justify md:text-left'>
              <li className='flex'><Checkmark /><span>Participate in Full-stack developments for projects in production, using web technologies such as Javascript, PHP, HTML, and CSS, providing responsive interfaces, maintaining good code practices and following the team and client specifications.</span></li>
              <li className='flex'><Checkmark /><span>Evaluate, update, and modify functionalities of the applications by optimizing their performance and efficiency, following good SEO practices supported by reports in Lighthouse and Screaming Frog.</span></li>
              <li className='flex'><Checkmark /><span>Analyze databases in MySQL and Elasticsearch to develop extraction and modification actions in the applications.</span></li>
            </ul>
          }
        /*
        achievements={
          <ul className='text-white list-inside text-shadow leading-8 text-lg'>
            <li className='flex'><Checkmark /><span>Participate in the code migration process by implementing best development practices, refactoring to object-oriented programming and following SOLID principles.</span></li>
            <li className='flex'><Checkmark /><span>Developed new solutions and optimized the SEO of existing pages, attracting more visits and maintaining their permanence in the domain.</span></li>
          </ul>
        }
        */
        />
      </SectionWrapper>

      <SectionWrapper title={'Tech Skills'} backgroundShade={'700'}>
        <Skills />
      </SectionWrapper>

      <SectionWrapper title={'Education and Certificates'} backgroundShade={'600'}>
        <div className='grid md:grid-cols-2 gap-8'>
          <EducationCard title={'Bachelor of Science in Software Engineering'} company={'Instituto Tecnológico Metropolitano'} date={'August 2022 - December 2024'} url={'https://www.itm.edu.co/'} logo={Itm} />
          <EducationCard title={'Code and Programming Bootcamp - Backend'} company={'MAKAIA'} date={'August 2023 - February 2024'} url={'https://makaia.org/'} logo={Makaia} />
          <EducationCard title={'Scrum Foundation Professional Certificate'} company={'CertiProf International'} date={'February 2023'} url={''} logo={CertiProf} />
          <EducationCard title={'C2 English Certificate'} company={'EF SET'} date={'February 2023'} url={''} logo={Efset} />
        </div>
      </SectionWrapper>
    </>
  )
}
