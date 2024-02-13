import { ProjectCard } from './ProjectCard';
import { projects } from '../projects';

export const Projects = () => {

  return (
    <div className='grid gap-8 w-100 mx-auto max-w-[1040px]'>
      {projects.toReversed().map((project, index) => (
        (project.title !== '') && <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
