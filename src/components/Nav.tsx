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
        theme === 'light' ? 'bg-neutral-50 text-black' : 'bg-neutral-900'
      } w-full fixed top-0 left-0 flex justify-center`}
    >
      <div className='w-full h-16 mx-72 gap-8 flex flex-row justify-between items-center text-center text-lg'>
        <a
          href='#home'
          className='text-2xl font-shadowintolight font-bold h-full flex items-center group'
        >
          <span
            className={`${
              theme === 'light'
                ? 'group-hover:text-black'
                : 'group-hover:text-white'
            } text-violet-700`}
          >
            &lt;
          </span>

          <span
            className={`${
              theme === 'light' ? 'text-black ' : 'text-white'
            } mx-[2px] group-hover:text-violet-700`}
          >
            Levy
          </span>

          <span
            className={`${
              theme === 'light'
                ? 'group-hover:text-black'
                : 'group-hover:text-white'
            } text-violet-700`}
          >
            /&gt;
          </span>
          {/* <span className='animate-blinking'>_</span> */}
        </a>

        <ul className='flex h-full gap-8'>
          <li className='flex justify-center items-center'>
            <a href='#about' className=' hover:text-violet-600 justify-center'>
              About
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a
              href='#projetcs'
              className=' hover:text-violet-600 justify-center'
            >
              Projects
            </a>
          </li>
          <li className='flex justify-center items-center'>
            <a
              href='#contact'
              className=' hover:text-violet-600 justify-center'
            >
              Contact
            </a>
          </li>

          <li className='flex justify-center items-center hover:text-violet-600'>
            <button onClick={toggleTheme}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
