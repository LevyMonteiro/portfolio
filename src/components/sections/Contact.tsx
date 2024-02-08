import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Send } from 'lucide-react';

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id='contact'
      className={`${
        theme === 'light' ? 'bg-violet-800' : 'bg-neutral-950'
      } w-screen h-screen flex justify-center items-center pt-16`}
    >
      <div
        id='wrapper'
        className='grid grid-cols-2 justify-center items-center max-w-[1184px] gap-12'
      >
        <div
          id='intro'
          className='flex flex-col gap-16 h-full justify-between pb-[68px]'
        >
          <h2 className='text-white text-4xl font-poppins font-semibold'>
            Say Hello!
          </h2>

          <div id='intro-content' className='flex flex-col gap-5 text-pretty'>
            <p className='opacity-85 text-lg'>
              Feel free to reach out if you have any questions or just want to
              say hello.
            </p>

            <p className='opacity-85 text-lg'>
              Whether you're interested in making connections, sharing
              knowledge, discussing new projects, or exploring opportunities.
            </p>

            <p className='opacity-85 text-lg'>
              I'm here to chat and ready to respond as soon as possible.
            </p>
          </div>

          <img
            src='src/assets/contact-us-4550329-3779137.webp'
            alt='contact-me ilustration'
          />
        </div>

        <div id='form' className='flex flex-col gap-6'>
          <h2 className='text-white text-4xl mb-2 font-poppins font-semibold'>
            Get in Touch
          </h2>

          <form action='' className='flex flex-col gap-[6px] text-lg'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter your full name'
              className={`${
                theme === 'light' ? 'bg-violet-800' : 'bg-neutral-950'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            />

            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='Enter your best email'
              className={`${
                theme === 'light' ? 'bg-violet-800' : 'bg-neutral-950'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            />

            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              id='subject'
              placeholder='Enter a subject'
              className={`${
                theme === 'light' ? 'bg-violet-800' : 'bg-neutral-950'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            />

            <label htmlFor='message'>Message</label>
            <textarea
              name=''
              id='message'
              cols='30'
              rows='7'
              placeholder='Your message here...'
              className={`${
                theme === 'light' ? 'bg-violet-800' : 'bg-neutral-950'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            ></textarea>

            <button
              className={`${
                theme === 'light'
                  ? 'hover:bg-orange-500'
                  : 'border-violet-800 bg-violet-800 hover:bg-neutral-950 text-neutral-200 hover:text-violet-600'
              } w-min px-6 py-3 rounded-sm border-[2px] transition ease-linear duration-300`}
            >
              <div className='flex gap-2 text-lg items-center'>
                <Send />
                <p>Submit</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
