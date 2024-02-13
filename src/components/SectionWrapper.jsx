export const SectionWrapper = ({ children, title, backgroundShade }) => {

  const anchor = title.replaceAll(' ', '-').toLowerCase();

  return (
    <div className={`bg-zinc-${backgroundShade}`} id={anchor}>
      <div className='flex flex-col w-full max-w-[1040px] py-14 px-5 mx-auto gap-8'>
        <h2 className='text-3xl text-shadow font-semibold text-blue-500'>{title}</h2>
        {children}
      </div>
    </div>
  )
}
