export const ExperienceCard = ({ title, date, company, description = '', url, logo, achievements = '' }) => {

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-1 sm:gap-0 sm:flex-row text-white text-shadow text-lg'>
        <div className='font-bold sm:pe-2 sm:me-2 sm:border-r-4 border-blue-500'>{title}</div>
        <a className='sm:pe-2 sm:me-2 sm:border-r-4 border-blue-500' href={url} target='_blank' rel='noopener noreferrer'>{company}</a>
        <div className='whitespace-nowrap'>{date}</div>
      </div>

      <div className='my-4'>
        {description}
      </div>
      {achievements !== '' &&
        <>
          <div className='text-white text-shadow text-lg font-bold'>
            Achievements
          </div>
          <div className='my-4'>
            {achievements}
          </div>
        </>
      }
    </div>
  )
}
