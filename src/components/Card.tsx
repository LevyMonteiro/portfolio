import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Card({ skill }: { skill: string }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === 'light'
          ? 'bg-violet-500 text-white text-shadow text-shadow-neutral-700'
          : 'bg-neutral-700 '
      } p-3 w-max`}
    >
      {skill}
    </div>
  );
}
