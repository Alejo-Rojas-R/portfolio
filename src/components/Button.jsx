export const Button = ({ title, link, icon }) => {
  return (
    <div className='relative text-white transition ease-in-out hover:scale-105'>
      <a className='flex flex-row items-center gap-2 bg-blue-600 font-semibold px-4 py-2 rounded-md shadow-md'
        href={link} target='_blank'>
        {icon} {title}

      </a>
    </div>
  )
}
