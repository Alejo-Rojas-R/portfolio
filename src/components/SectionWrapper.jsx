export const SectionWrapper = ({ children, title, backgroundShade }) => {
  return (
    <div className={`bg-zinc-${backgroundShade}`}>
      <div className='flex flex-col w-full max-w-[1040px] py-14 px-5 mx-auto gap-8'>
        <h2 className='text-3xl text-shadow font-semibold text-blue-400'>{title}</h2>
        {children}
      </div>
    </div>
  )
}
