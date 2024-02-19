import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import {
  ArrowBigLeftDash,
  ArrowBigUpDash,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Footer({ currentPage }: any) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const { theme } = useContext(ThemeContext);
  console.log(currentPage);
  return (
    <footer
      className={`${
        theme === 'light' ? 'bg-neutral-50 text-black' : 'bg-black text-white'
      } ${
        currentPage === 'projectPage' ? 'sticky 2xl:absolute bottom-0' : ''
      } w-screen flex justify-center items-center py-6 px-10 2xl:px-0`}
    >
      <div className='w-[1184px] flex flex-col'>
        <div className='flex justify-between opacity-90 font-medium text-base sm:text-lg'>
          <a
            href='/#home'
            className='hover:text-violet-600 transition ease-in-out duration-300 justify-center flex items-center gap-1'
          >
            {currentPage === 'root' && (
              <>
                <ArrowBigUpDash />
                Back to the top
              </>
            )}

            {currentPage === 'projectPage' && (
              <>
                <ArrowBigLeftDash />
                Back Home
              </>
            )}
          </a>

          <ul className='flex gap-2 justify-center items-center'>
            <li>
              <a
                href='mailto:olevymonteiro@gmail.com'
                className='hover:text-violet-600 transition ease-in-out duration-300 justify-center flex items-center gap-1'
                target='_blank'
              >
                <Mail />
              </a>
            </li>

            <li>
              <a
                href='https://github.com/levymonteiro'
                className='hover:text-violet-600 transition ease-in-out duration-300 justify-center flex items-center gap-1'
                target='_blank'
              >
                <Github />
              </a>
            </li>

            <li>
              <a
                href='https://linkedin.com/in/levymonteiro'
                className='hover:text-violet-600 transition ease-in-out duration-300 justify-center flex items-center gap-1'
                target='_blank'
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>

        <hr
          className={`${
            theme === 'light' ? 'brightness-75' : 'opacity-30'
          } my-3`}
        />

        <div className='text-center opacity-60 text-xs sm:text-sm'>
          © {currentYear} | Portfolio website coded by Levy Monteiro
        </div>
      </div>
    </footer>
  );
}
