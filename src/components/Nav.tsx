import { Moon, Sun } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <nav
      className={`${
        theme === 'light' ? 'bg-neutral-50' : 'bg-neutral-900'
      } w-full fixed top-0 left-0 flex justify-center`}
    >
      <div className='w-[1168px] h-16 gap-8 flex flex-row justify-between items-center text-center text-lg'>
        <a
          href='#home'
          className='text-xl font-bold w-24 h-full flex items-center hover:text-violet-400'
        >
          Levy
          <span className='animate-blinking'>_</span>
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

          <li className='flex justify-center items-center hover:text-violet-400'>
            <button onClick={toggleTheme}>
              {theme === 'dark' ? <Moon /> : <Sun />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
