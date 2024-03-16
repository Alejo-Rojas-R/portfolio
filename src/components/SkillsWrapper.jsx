export const SkillsWrapper = ({ children, title }) => {

  if (title === 'fe') {
    title = 'Front-end';
  } else if (title === 'be') {
    title = 'Back-end';
  } else {
    title = 'Other';
  }

  return (
    <div className='w-1/3'>
      <div className='text-white font-semibold sm:text-2xl text-center text-shadow mb-6 whitespace-nowrap '>{title}</div>
      <div className='flex flex-col sm:flex-row sm:flex-wrap '>
        {children}
      </div>
    </div>
  )
}
