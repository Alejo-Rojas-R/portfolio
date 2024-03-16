export const ExperienceCard = ({ title, date, company, description = '', url, logo, achievements = '' }) => {

  return (
    <div className={'flex ' + (description !== '' ? 'md:flex-row-reverse flex-col-reverse md:gap-10' : 'gap-5 md:flex-row')}>
      <div className={'flex text-center md:flex-col items-center gap-3 md:gap-0 justify-center md:justify-start ' + (description !== '' ? 'md:mt-12' : '')}>
        <a className={'md:mx-auto ' + (description !== '' ? 'w-10 md:w-16' : 'w-16')} href={url} target='_blank' rel='noopener noreferrer'>
          <img className='rounded-lg transition ease-in-out hover:scale-110' src={logo} alt={company} />
        </a>
        {description !== '' && <div className='text-white text-shadow text-lg my-2 font-bold'>{company}</div>}
        {description !== '' && <div className='text-white text-shadow text-lg whitespace-nowrap'>{date}</div>}
      </div>

      <div className='flex flex-col'>
        <div className='text-white text-shadow text-lg font-bold'>
          {title}
        </div>
        <div className='my-4'>
          {description !== '' && description}
          {description === '' && <div className='text-white text-shadow text-lg'>{company}</div>}
        </div>
        {description === '' &&
          <div className='text-white text-shadow text-lg'>
            {date}
          </div>
        }
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
    </div>
  )
}
