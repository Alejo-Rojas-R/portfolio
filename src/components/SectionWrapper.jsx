export const SectionWrapper = ({ children, title, backgroundShade }) => {

  const anchor = title.replaceAll(' ', '-').toLowerCase();

  return (
    <div className={`bg-zinc-${backgroundShade}`} id={anchor}>
      <div className='flex flex-col w-full max-w-[1040px] pt-12 pb-16 px-5 mx-auto gap-8'>
        <h2 className='text-3xl text-shadow font-bold text-blue-500 text-center uppercase'>{title}</h2>
        {children}
      </div>
    </div>
  )
}
