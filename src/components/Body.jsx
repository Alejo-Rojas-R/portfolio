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
            <li className='flex'><Checkmark /><span>Develop and maintain some of the company's PHP backend features with great attention to the code's functionality and readability.</span></li>
            <li className='flex'><Checkmark /><span>Analyze and extract relevant data for the organization from MySQL and ElasticSearch databases.</span></li>
            <li className='flex'><Checkmark /><span>Updating and altering application features to enhance performance and following SEO principles by analyzing pages with Lighthouse.</span></li>
            <li className='flex'><Checkmark /><span>Develop interfaces using web technologies such as HTML, CSS, and JavaScript and ensure its responsivity.</span></li>
            <li className='flex'><Checkmark /><span>Collaborate with the design team to ensure that the interface integrates correctly.</span></li>
            <li className='flex'><Checkmark /><span>Explain, share and demo the work and ideas to the Product Owners and other peers.</span></li>
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
              I'm a driven and creative individual with a strong passion for art, music, travel and languages.
              Exploring new cultures and landscapes not only fuels my creativity but also broadens my perspective on the world.
              My love for languages goes beyond coding languages—I am proficient in English at a C2 level and actively pursuing proficiency in German.
            </p>
            <p className='text-white text-shadow text-lg'>
              My approach to work is built on principles of creativity, honesty, and a determined effort to achieve set goals.
              I am particularly interested in collaborative opportunities that involve working together on coding projects to create something innovative and exceptional.
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
