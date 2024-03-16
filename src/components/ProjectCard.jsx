import { AiFillGithub } from 'react-icons/ai';
import { IoOpenOutline } from 'react-icons/io5';
import { Button } from './Button';

export const ProjectCard = ({ link, thumbnail, title, description, badges, github }) => {

  return (
    <div className='project-card grid md:grid-cols-1 md:grid-cols-2 gap-10 max-w-[1040px]'>
      <img className='rounded-xl shadow-md' src={thumbnail} alt='' />
      <div className='leading-normal text-center flex flex-col justify-center gap-8 pb-8'>
        <h5 className='text-3xl text-shadow text-white'>{title}</h5>
        <p className='text-lg text-white text-shadow text-justify'>{description}</p>
        <div className='flex flex-wrap gap-3 justify-center'>
          {badges.map((badge, index) => (
            <div key={index} className='text-white font-semibold px-2.5 py-0.5 border whitespace-nowrap shadow-md rounded-md'>{badge}</div>
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
