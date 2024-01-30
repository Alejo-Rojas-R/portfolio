export const Skills = () => {
    const skills = [
        {/* icon: 'azure-plain', name: 'Azure' */ },
        { icon: 'bootstrap-plain', name: 'Bootstrap' },
        {/* icon: 'csharp-plain', name: 'C#' */ },
        { icon: 'css3-plain', name: 'CSS' },
        {/*icon:'dot-net-plain', name:'.net'*/ },
        {/* icon: 'dotnetcore-plain', name: '.NET Core'*/ },
        {/* icon: 'eslint-original', name: 'esLint' */ },
        {/* icon: 'figma-plain', name: 'Figma' */ },
        { icon: 'git-plain', name: 'Git' },
        { icon: 'github-original', name: 'GitHub' },
        { icon: 'html5-plain', name: 'HTML' },
        {/* icon: 'intellij-plain', name: 'IntelliJ'*/ },
        { icon: 'java-plain', name: 'Java' },
        { icon: 'javascript-plain', name: 'Javascript' },
        { icon: 'jest-plain', name: 'Jest' },
        { icon: 'jquery-plain', name: 'jQuery' },
        {/* icon: 'jira-plain', name: 'Jira' */ },
        { icon: 'mysql-plain', name: 'MySQL' },
        { icon: 'mongodb-plain', name: 'MongoDB' },
        { icon: 'nodejs-plain', name: 'Node.js' },
        { icon: 'php-plain', name: 'PHP' },
        {/*icon: 'phpstorm-plain', name: 'PHP Storm'*/ },
        { icon: 'react-original', name: 'React.js' },
        { icon: 'redux-original', name: 'Redux' },
        { icon: 'spring-plain', name: 'Spring' },
        { icon: 'tailwindcss-plain', name: 'Tailwind' },
    ];

    return (
        <div className='flex flex-wrap w-full max-w-[1040px] gap-4 justify-center mt-5'>
            {
                skills.map((skill, index) => (
                    skill.name &&
                    <div key={index} className='flex flex-col justify-center items-center w-24 h-24 bg-white rounded transition ease-in-out hover:scale-105 shadow-lg shadow-black'>
                        <i className={`devicon-${skill.icon} colored text-4xl`} />
                        <div className='mt-2 text-black font-bold'>{skill.name}</div>
                    </div>
                ))
            }
        </div>
    )
}