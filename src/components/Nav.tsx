import { Moon, Sun } from 'lucide-react';

export default function Nav() {
  return (
    <nav className='bg-neutral-900 w-full fixed top-0 left-0 flex justify-center'>
      <div className='w-[1168px] h-16 gap-8 flex flex-row justify-between items-center text-center text-lg'>
        <a
          href='#home'
          className='text-xl font-bold w-24 h-full flex items-center hover:text-violet-400 '
        >
          Levy<span className='animate-blinking'>_</span>
        </a>

        <ul className='flex h-full gap-8'>
          <li className='flex justify-center items-center'>
            <a href='#about' className=' hover:text-violet-400 justify-center'>
              About
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a
              href='#projetcs'
              className=' hover:text-violet-400 justify-center'
            >
              Projects
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a
              href='#contact'
              className=' hover:text-violet-400 justify-center'
            >
              Contact
            </a>
          </li>

          <li className='flex justify-center items-center'>
            {<Sun /> || <Moon />}
          </li>
        </ul>
      </div>
    </nav>
  );
}
