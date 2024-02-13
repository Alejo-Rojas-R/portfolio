import { useState, useEffect } from 'react';
import { Button } from './Button';
import { GrDocumentPdf } from "react-icons/gr";

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
    <nav className={`sm:visible invisible transition ease-in-out w-full px-5 fixed top-0 z-50 ${scrolling ? 'bg-zinc-700 py-4' : 'py-4'}`}>
      <div className='max-w-[1040px] flex justify-between m-auto'>
        <h1 className='text-xl font-burtons text-white'>🜇</h1>
        <ul className='flex items-center gap-6'>
          <li className='text-white font-semibold hover:scale-110'><a href='#about'>About</a></li>
          <li className='text-white font-semibold hover:scale-110'><a href='#education-and-certificates'>Education</a></li>
          <li className='text-white font-semibold hover:scale-110'><a href='#work-experience'>Experience</a></li>
          <li className='text-white font-semibold hover:scale-110'><a href='#projects'>Projects</a></li>
          <li className='text-white font-semibold hover:scale-110'><a href='#tech-skills'>Skills</a></li>
          {/*<li className='text-white font-semibold hover:scale-110'><a href='#contact'>Contact</a></li>*/}
          <Button title='Resume' icon={<GrDocumentPdf />} link={'https://drive.google.com/file/d/1lMDqA3gHhUqUO3VMCxNDtgsQVmkSMMJz/view?usp=sharing'} />
          {/*<li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>*/}
        </ul>
      </div>
    </nav>
  )
}
