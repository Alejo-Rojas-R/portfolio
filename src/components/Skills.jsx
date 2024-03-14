export const Skills = () => {
  const skills = [
    { icon: 'amazonwebservices-plain', name: 'AWS', percentage: 25 },
    { icon: 'bootstrap-plain', name: 'Bootstrap', percentage: 100 },
    { icon: 'css3-plain', name: 'CSS', percentage: 100 },
    { icon: 'git-plain', name: 'Git', percentage: 80 },
    { icon: 'github-original', name: 'GitHub', percentage: 85 },
    { icon: 'html5-plain', name: 'HTML', percentage: 100 },
    { icon: 'java-plain', name: 'Java', percentage: 65 },
    { icon: 'javascript-plain', name: 'Javascript', percentage: 95 },
    { icon: 'jquery-plain', name: 'jQuery', percentage: 75 },
    { icon: 'jira-plain', name: 'Jira', percentage: 60 },
    { icon: 'mysql-plain', name: 'MySQL', percentage: 85 },
    { icon: 'mongodb-plain', name: 'MongoDB', percentage: 75 },
    { icon: 'nodejs-plain', name: 'Node.js', percentage: 50 },
    { icon: 'php-plain', name: 'PHP', percentage: 100 },
    { icon: 'react-original', name: 'React.js', percentage: 90 },
    { icon: 'spring-plain', name: 'Spring', percentage: 75 },
    { icon: 'tailwindcss-plain', name: 'Tailwind', percentage: 90 },
    { icon: 'typescript-plain', name: 'Typescript', percentage: 35 },
  ];

  return (
    <div className='flex flex-wrap w-full max-w-[1040px] gap-4 justify-center mt-5'>
      {
        skills.map((skill, index) => (
          skill.name &&
          <div key={index} className='flex flex-col justify-between items-center w-24 h-24 pt-2 bg-white rounded-t-lg rounded-b-xl transition ease-in-out hover:scale-105 shadow-md shadow-black'>
            <i className={`devicon-${skill.icon} colored text-4xl`} />
            <div className='text-black font-bold mb-2'>{skill.name}</div>
            <div className='w-full bg-zinc-300 rounded-b-lg'>
              <div className={`bg-zinc-500 text-white text-sm text-center leading-none rounded-bl-lg ${skill.percentage === 100 ? 'rounded-br-lg' : ''} py-0.5`} style={{ width: `${skill.percentage}%` }}> {skill.percentage}%</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}