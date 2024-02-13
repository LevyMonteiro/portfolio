import { Moon, Sun, Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Nav({ currentPage }: any) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [navVisibility, setNavVisibility] = useState(false);

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  function toggleNav() {
    const mobNav = document.querySelector('#mobile-nav');
    if (navVisibility) {
      mobNav?.classList.add('-translate-y-full');
      mobNav?.classList.remove('-translate-y-0');
      setNavVisibility(!navVisibility);
    } else {
      mobNav?.classList.remove('-translate-y-full');
      mobNav?.classList.add('-translate-y-0');
      setNavVisibility(!navVisibility);
    }
  }

  return (
    <header
      className={`${
        theme === 'light' ? 'bg-neutral-50 text-black' : 'bg-black text-white'
      } w-screen min-h-16 fixed top-0 left-0 flex flex-col justify-start items-center z-10 opacity-90`}
    >
      <nav className='w-full 2xl:w-[1184px] h-16 px-8 sm:px-12 2xl:px-0 gap-8 flex flex-wrap justify-between items-center text-center text-lg z-10'>
        <div id='logo' className='h-full flex items-center group'>
          <span className='sr-only'>Home button navegation</span>

          <a
            href='/'
            className='text-2xl font-shadowintolight font-bold h-full flex items-center group'
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
        </div>

        <div
          id='navegation'
          className='flex h-full gap-8 font-medium w-max justify-center items-center'
        >
          <ul
            id='desktop-navegation'
            className='w-min h-full lg:flex gap-8 hidden'
          >
            {currentPage === 'root' && (
              <>
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
              </>
            )}

            {currentPage === 'projectPage' && (
              <>
                <li className='flex justify-center items-center hover:text-violet-600 transition ease-in-out duration-300`'>
                  <a
                    href='/'
                    className='hover:text-violet-600 transition ease-in-out duration-300 justify-center flex items-center gap-1'
                  >
                    Home
                  </a>
                </li>
              </>
            )}
          </ul>

          <button
            id='hamburger-menu'
            className='hover:text-violet-600 transition ease-in-out duration-300 justify-center lg:hidden'
            onClick={toggleNav}
          >
            <span className='sr-only'>Hambureger Menu</span>
            {navVisibility ? <X /> : <Menu />}
          </button>

          <li className='flex justify-center items-center hover:text-violet-600 transition ease-in-out duration-300'>
            <button onClick={toggleTheme}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </li>
        </div>
      </nav>

      <nav
        id='mobile-nav'
        className={`${
          theme === 'light' ? 'bg-neutral-50 text-black' : 'bg-black text-white'
        } h-screen text-lg font-medium absolute top-[62px] flex flex-col justify-center pt-16 -translate-y-full transition ease-in-out duration-700`}
      >
        <ul
          id='mobile-navegation'
          className='w-screen h-full lg:hidden gap-8 flex flex-col justify-start'
        >
          {currentPage === 'root' && (
            <>
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
            </>
          )}

          {currentPage === 'projectPage' && (
            <>
              <li className='flex justify-center items-center hover:text-violet-600 transition ease-in-out duration-300`'>
                <a
                  href='/'
                  className='hover:text-violet-600 transition ease-in-out duration-300 justify-center flex items-center gap-1'
                >
                  Home
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
