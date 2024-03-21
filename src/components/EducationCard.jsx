export const EducationCard = ({ title, date, company, url, logo }) => {

  return (
    <div className={'flex gap-5 md:flex-row'}>
      <div className={'flex text-center md:flex-col gap-3 md:gap-0 justify-center md:justify-start '}>
        <a className={'md:mx-auto w-16'} href={url} target='_blank' rel='noopener noreferrer'>
          <img className='rounded-lg transition ease-in-out hover:scale-110' src={logo} alt={company} />
        </a>
      </div>

      <div className='flex flex-col leading-9 text-white text-shadow text-lg'>
        <div className='font-bold'>
          {title}
        </div>
        <div className=''>{company}</div>
        <div className=''>{date}</div>
      </div>
    </div>
  )
}
