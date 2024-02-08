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
    <div className='flex flex-col group h-[248px]'>
      <a href={route} className='w-full h-full'>
        <img src={img} alt={`${id} app demo`} />
        <div
          className={`${
            theme === 'light' ? 'bg-violet-600' : 'bg-violet-700'
          } text-center h-min p-4 text-lg rounded-sm transition ease-linear duration-300`}
        >
          {id}
        </div>
      </a>
    </div>
  );
}
