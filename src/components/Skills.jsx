import { SkillsWrapper } from './SkillsWrapper';

const skills = [
  { icon: 'amazonwebservices-plain', name: 'AWS', percentage: 25, category: 'other' },
  { icon: 'bootstrap-plain', name: 'Bootstrap', percentage: 95, category: 'fe' },
  { icon: 'css3-plain', name: 'CSS', percentage: 95, category: 'fe' },
  { icon: 'git-plain', name: 'Git', percentage: 80, category: 'other' },
  { icon: 'github-original', name: 'GitHub', percentage: 85, category: 'other' },
  { icon: 'html5-plain', name: 'HTML', percentage: 95, category: 'fe' },
  { icon: 'java-plain', name: 'Java', percentage: 65, category: 'be' },
  { icon: 'javascript-plain', name: 'Javascript', percentage: 95, category: 'fe' },
  { icon: 'jquery-plain', name: 'jQuery', percentage: 75, category: 'fe' },
  { icon: 'jira-plain', name: 'Jira', percentage: 60, category: 'other' },
  { icon: 'mysql-plain', name: 'MySQL', percentage: 85, category: 'other' },
  { icon: 'mongodb-plain', name: 'MongoDB', percentage: 75, category: 'other' },
  { icon: 'nodejs-plain', name: 'Node.js', percentage: 35, category: 'be' },
  { icon: 'php-plain', name: 'PHP', percentage: 90, category: 'be' },
  { icon: 'react-original', name: 'React.js', percentage: 90, category: 'fe' },
  { icon: 'spring-plain', name: 'Spring', percentage: 75, category: 'be' },
  { icon: 'tailwindcss-plain', name: 'Tailwind', percentage: 90, category: 'fe' },
  { icon: 'typescript-plain', name: 'Typescript', percentage: 25, category: 'be' },
];

export const Skills = () => {

  const categories = [...new Set(skills.map(item => item.category))].reverse();

  return (
    <div className='flex w-full max-w-[1040px] mt-5 gap-8'>
      {categories.map((category, index) => (
        <SkillsWrapper key={index} title={category}>
          {
            skills.map((skill, index) => (
              (skill.name && skill.category === category) &&
              <div key={index} className='flex flex-col items-center sm:w-1/2 p-2 mb-5'>
                <i className={`devicon-${skill.icon} colored text-4xl text-shadow`} />
                <div className='text-white font-semibold mb-4 text-shadow'>{skill.name}</div>
                <div className='w-full bg-zinc-600 rounded-full shadow-sm'>
                  <div className={`bg-zinc-400 text-white text-center rounded-l-lg ${skill.percentage === 100 ? 'rounded-r-lg' : ''}`} style={{ width: `${skill.percentage}%` }}>
                    <div className='text-zinc-600 text-black font-semibold text-sm leading-none '> {skill.percentage}%</div>
                  </div>

                </div>
              </div>
            ))
          }
        </SkillsWrapper>
      ))
      }
    </div>
  )
}