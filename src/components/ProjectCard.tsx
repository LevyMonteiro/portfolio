import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ProjectCard({
  id,
  img,
  route,
}: {
  id: string;
  img: string;
  route: string;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='flex flex-col group'>
      <a href={route} className='w-full h-64'>
        <img src={img} alt={`${id} app demo`} />
        <div
          className={`${
            theme === 'light'
              ? 'bg-violet-600 group-hover:bg-opacity-90'
              : 'bg-neutral-600 group-hover:brightness-110'
          } p-5 flex flex-col items-center justify-center font-medium`}
        >
          {id}
        </div>
      </a>
    </div>
  );
}
