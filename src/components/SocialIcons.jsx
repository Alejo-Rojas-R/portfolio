import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';

export const SocialIcons = () => {
  return (
    <div className='text-5xl flex justify-center gap-8 text-blue-500 mx-auto mt-8 lg:mt-5'>
      <a className='transition ease-in-out hover:scale-110' href='https://github.com/Alejo-Rojas-R'>
        <AiFillGithub />
      </a>
      <a className='transition ease-in-out hover:scale-110' href='https://www.linkedin.com/in/alejandro-rojas-rodriguez/'>
        <AiFillLinkedin />
      </a>
      <a className='transition ease-in-out hover:scale-110' href='mailto:alejandrorojas1152@gmail.com'>
        <AiFillMail />
      </a>
    </div>
  )
}
