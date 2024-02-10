import { useContext, useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context/ThemeContext';
import { Send } from 'lucide-react';

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  const defaultData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(defaultData);

  const { name, email, subject, message } = formData;

  const form = useRef();

  const onChange = (e: { target: { id: any; value: any } }) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bo5v7yw', 'template_gq6ml2j', form.current, {
        publicKey: 'WOxR54mY0YCdsNKIH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to sent message');
        }
      );
  };

  return (
    <section
      id='contact'
      className={`${
        theme === 'light' ? 'bg-violet-800' : 'bg-neutral-950'
      } w-screen min-h-screen flex justify-center items-center py-24 text-white`}
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

        <div id='form' className='flex flex-col gap-6 h-full'>
          <h2 className='text-white text-4xl mb-2 font-poppins font-semibold'>
            Get in Touch
          </h2>

          <form
            className='flex flex-col gap-[6px] text-lg'
            onSubmit={onSubmit}
            ref={form}
          >
            <label htmlFor='name'>Name</label>
            <input
              required
              type='text'
              id='name'
              name='name'
              placeholder='Enter your full name'
              value={name}
              onChange={onChange}
              className={`${
                theme === 'light'
                  ? 'bg-violet-800 focus:border-orange-500'
                  : 'bg-neutral-950 focus:border-violet-700'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            />

            <label htmlFor='email'>Email</label>
            <input
              required
              type='text'
              id='email'
              name='email'
              placeholder='Enter your best email'
              value={email}
              onChange={onChange}
              className={`${
                theme === 'light'
                  ? 'bg-violet-800 focus:border-orange-500'
                  : 'bg-neutral-950 focus:border-violet-700'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            />

            <label htmlFor='subject'>Subject</label>
            <input
              required
              type='text'
              id='subject'
              name='subject'
              placeholder='Enter a subject'
              value={subject}
              onChange={onChange}
              className={`${
                theme === 'light'
                  ? 'bg-violet-800 focus:border-orange-500'
                  : 'bg-neutral-950 focus:border-violet-700'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2`}
            />

            <label htmlFor='message'>Message</label>
            <textarea
              required
              id='message'
              name='message'
              cols={30}
              rows={7}
              placeholder='Your message here...'
              value={message}
              onChange={onChange}
              className={`${
                theme === 'light'
                  ? 'bg-violet-800 focus:border-orange-500'
                  : 'bg-neutral-950 focus:border-violet-700'
              } border-[2px] border-neutral-300 rounded-sm px-4 py-3 focus:outline-none mb-2 max-h-[380px]`}
            ></textarea>

            <button
              type='submit'
              className={`${
                theme === 'light'
                  ? 'hover:bg-orange-500'
                  : 'border-violet-800 bg-violet-800 hover:bg-neutral-950 text-neutral-200 hover:text-violet-600 duration-300'
              } w-min px-6 py-3 rounded-sm border-[2px] flex gap-1 text-lg items-center transition ease-linear`}
            >
              <Send className='size-[22px]' />
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
