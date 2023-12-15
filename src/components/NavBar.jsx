import { useState, useEffect } from 'react';

export const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`transition ease-in-out w-full px-5 fixed top-0 z-50 ${scrolling ? 'bg-black py-4' : 'py-4'}`}>
            <div className='max-w-[1040px] flex justify-between m-auto'>
                <h1 className='text-xl font-burtons text-white'>🜇</h1>
                <ul className='sm:visible invisible flex items-center gap-6'>
                    <li className='text-white font-semibold hover:scale-110'><a href='#about-me'>About</a></li>
                    <li className='text-white font-semibold hover:scale-110'><a href='#projects'>Projects</a></li>
                    <li className='text-white font-semibold hover:scale-110'><a href='#experience'>Experience</a></li>
                    <li className='text-white font-semibold hover:scale-110'><a href='#skills'>Skills</a></li>
                    <li className='text-white font-semibold hover:scale-110'><a href='#studies'>Studies</a></li>
                    {/*<li className='text-white font-semibold hover:scale-110'><a href='#contact'>Contact</a></li>*/}
                    <li className='text-white font-semibold hover:scale-110'><a href='https://github.com/Alejo-Rojas-R' target='_blank'>Github</a></li>
                    <li className='text-white transition ease-in-out hover:scale-110'>
                        <a className='bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-md'
                            href='https://drive.google.com/file/d/1lMDqA3gHhUqUO3VMCxNDtgsQVmkSMMJz/view?usp=sharing'
                            target='_blank'>Resume</a>
                    </li>
                    {/*<li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>*/}
                </ul>
            </div>
        </nav>
    )
}
