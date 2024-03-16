import { AiFillGithub } from 'react-icons/ai';
import { IoOpenOutline } from 'react-icons/io5';
import { Button } from './Button';

const skills = [
  { icon: 'bootstrap-plain', name: 'Bootstrap', percentage: 95, category: 'fe' },
  { icon: 'css3-plain', name: 'CSS', percentage: 95, category: 'fe' },
  { icon: 'html5-plain', name: 'HTML', percentage: 95, category: 'fe' },
  { icon: 'java-plain', name: 'Java', percentage: 65, category: 'be' },
  { icon: 'javascript-plain', name: 'Javascript', percentage: 95, category: 'fe' },
  { icon: 'mysql-plain', name: 'MySQL', percentage: 85, category: 'other' },
  { icon: 'mongodb-plain', name: 'MongoDB', percentage: 75, category: 'other' },
  { icon: 'nodejs-plain', name: 'Node.js', percentage: 35, category: 'be' },
  { icon: 'php-plain', name: 'PHP', percentage: 90, category: 'be' },
  { icon: 'react-original', name: 'React.js', percentage: 90, category: 'fe' },
  { icon: 'spring-plain', name: 'Spring', percentage: 75, category: 'be' },
  { icon: 'tailwindcss-plain', name: 'Tailwind', percentage: 90, category: 'fe' },
  { icon: 'typescript-plain', name: 'Typescript', percentage: 25, category: 'be' },
];

export const ProjectCard = ({ link, thumbnail, title, description, badges, github }) => {

  return (
    <div className='project-card grid md:grid-cols-1 md:grid-cols-2 gap-10 max-w-[1040px]'>
      <img className='rounded-xl shadow-md' src={thumbnail} alt='' />
      <div className='leading-normal text-center flex flex-col justify-center gap-8 pb-8'>
        <h5 className='text-3xl text-shadow text-white'>{title}</h5>
        <p className='text-lg text-white text-shadow text-justify'>{description}</p>
        <div className='flex flex-wrap gap-2 justify-center'>
          {badges.map((badge, index) => (
            <div key={index} className='text-white font-semibold px-2 py-0.5 bg-zinc-600 whitespace-nowrap shadow-md rounded-md'>

              {badge}
            </div>
          ))}
        </div>
        <div className='gap-3 flex justify-center'>
          {link && <Button title={'Live Demo'} link={link} icon={<IoOpenOutline />} />}
          {github && <Button title={'Documentation'} link={github} icon={<AiFillGithub />} />}
        </div>
      </div>
    </div>
  )
}
