import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Project({ info }: { info: {} }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div id='project' className='flex flex-col'>
      <a href='' className='w-full h-64'>
        <img src={info.img} alt={`${info.id} app demo`} />
        <div
          className={`${
            theme === 'light' ? 'bg-violet-600' : 'bg-neutral-600'
          } p-5 flex flex-col items-center justify-center font-medium`}
        >
          {info.id}
        </div>
      </a>
    </div>
  );
}
