import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const body = document.querySelector('body');
  if (theme === 'light') {
    body?.classList.add('bg-neutral-50', 'text-black');
  } else {
    body?.classList.remove('bg-neutral-50', 'text-black');
    body?.classList.add('bg-black', 'text-white');
  }

  return (
    <section
      id='home'
      className={`${
        theme === 'light' ? 'bg-neutral-50' : 'bg-black'
      } w-screen min-h-screen flex justify-center px8 py-6 md:py-24`}
    >
      <div
        id='home__container'
        className='flex flex-col xl:flex-row justify-center items-center gap-8 xl:gap-16 xl:w-[80%] 2xl:w-[1184px]'
      >
        <div
          id='home__description'
          className='flex flex-col justify-center text-center xl:text-start gap-3 sm:gap-5 w-[80%] lg:w-[480px] 2xl:w-[600px] h-max'
        >
          <h1 className='text-lg lg:text-2xl 2xl:text-3xl'>
            <span
              className={`${
                theme === 'light'
                  ? 'text-neutral-800'
                  : 'opacity-90 text-neutral-200'
              }`}
            >
              Hi there, i'm{' '}
            </span>

            <span
              className={`${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              } opacity-95 font-medium`}
            >
              Levy Monteiro
            </span>
          </h1>

          <p className='font-poppins text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-violet-800 relative -left-[6px]'>
            Front-end Developer
          </p>

          <p
            className={`${
              theme === 'light' ? 'text-neutral-800' : ''
            } text-lg lg:text-2xl 2xl:text-3xl text-neutral-200 sm:text-balance`}
          >
            Passionate about tech and learning new things, specialised in web
            design.
          </p>
        </div>

        <div
          id='home__photo'
          className='h-min flex justify-center items-center w-[70%] sm:w-[75%] md:w-[420px] 2xl:w-[520px]'
        >
          <svg
            viewBox='0 0 200 187'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-violet-800 hover:scale-110 transition duration-300 hover:brightness-90'
          >
            <mask id='mask0' mask-type='alpha'>
              <path
                d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
              />
            </mask>
            <g mask='url(#mask0)'>
              <path
                d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
              />

              <image
                href='src/assets/home/blob-img.png'
                width={'100%'}
                height={'106%'}
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
