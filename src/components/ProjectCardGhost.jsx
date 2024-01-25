import noImage from "../../public/no-image.webp"

export const ProjectCardGhost = () => {

    return (
        <div className='flex flex-col items-center rounded-lg bg-zinc-700 max-w-[1040px] shadow-lg shadow-black'>
            <div>
                <div className='bg-zinc-500 rounded-lg'></div>
                <div className='p-4'>
                    <div className='mb-3 rounded h-8 bg-zinc-500'>-</div>
                    <div className='mb-1 rounded h-4 bg-zinc-500'></div>
                    <div className='mb-1 rounded h-4 bg-zinc-500'></div>
                    <div className='mb-1 rounded h-4 bg-zinc-500'></div>
                </div>
            </div>
        </div >
    )
}
