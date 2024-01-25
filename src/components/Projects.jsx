import { ProjectCard } from './ProjectCard';
import { ProjectCardGhost } from './ProjectCardGhost';
import { useEffect, useState } from 'react';

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then((response) => response.json())
            .then((projects) => setProjects(projects))
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-100 mx-auto max-w-[1040px] inline'>
                {
                    [1, 2, 3].map((index) => (
                        <ProjectCardGhost key={index} />
                    ))
                }
            </div>
        );
    }

    if (projects == []) {
        return (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-100 mx-auto max-w-[1040px]'>
                No results.
            </div>
        );
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-100 mx-auto max-w-[1040px]'>

            {
                projects.toReversed().map((project, index) => (
                    (project.title != '') &&
                    <ProjectCard key={index} {...project} />
                ))
            }
        </div>
    )
}
