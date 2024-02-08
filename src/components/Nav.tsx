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
    <header
      className={`${
        theme === 'light' ? 'bg-neutral-50 text-black' : 'bg-black text-white'
      } w-full fixed top-0 left-0 flex justify-center z-10 opacity-90`}
    >
      <nav className='w-full h-16 mx-60 gap-8 flex flex-row justify-between items-center text-center text-lg'>
        <a
          href='/'
          className='text-2xl font-shadowintolight font-bold h-full flex items-center group '
        >
          <span
            className={`${
              theme === 'light'
                ? 'group-hover:text-black'
                : 'group-hover:text-white'
            } text-violet-700 transition ease-in-out duration-500`}
          >
            &lt;
          </span>

          <span
            className={`${
              theme === 'light' ? 'text-black ' : 'text-white'
            } mx-[2px] group-hover:text-violet-700 transition ease-in-out duration-500`}
          >
            Levy
          </span>

          <span
            className={`${
              theme === 'light'
                ? 'group-hover:text-black'
                : 'group-hover:text-white'
            } text-violet-700 transition ease-in-out duration-500`}
          >
            /&gt;
          </span>
        </a>

        <ul className='flex h-full gap-8 font-medium'>
          <li className='flex justify-center items-center'>
            <a
              href='/#about'
              className='hover:text-violet-600 transition ease-in-out duration-300 justify-center'
            >
              About
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a
              href='/#projects'
              className='hover:text-violet-600 transition ease-in-out duration-300 justify-center'
            >
              Projects
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a
              href='/#contact'
              className='hover:text-violet-600 transition ease-in-out duration-300 justify-center'
            >
              Contact
            </a>
          </li>

          <li className='flex justify-center items-center hover:text-violet-600 transition ease-in-out duration-300'>
            <button onClick={toggleTheme}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
