function App() {
  return (
    <>
      <section id='home' className='w-full h-screen flex gap-12'>
        <div
          id='home__description'
          className='flex flex-col justify-center gap-4 w-[600px]'
        >
          <h1 className='text-4xl '>
            <span className='opacity-90 text-neutral-200 font-semibold'>
              Hi there i'm{' '}
            </span>
            <span className='opacity-95 font-bold'>Levy</span>
          </h1>
          <p className='font-poppins text-8xl opacity-90 text-violet-400 relative -left-[6px]'>
            Front-end Developer
          </p>

          <p className='text-2xl text-neutral-200'>
            Passionate about tech and learning new things, specialised in web
            design.
          </p>
        </div>

        <div
          id='home__photo'
          className='flex flex-col justify-center items-center w-[520px]'
        >
          <svg
            viewBox='0 0 200 187'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
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

              <image href='src/assets/me.png' width={'100%'} height={'106%'} />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}

export default App;
