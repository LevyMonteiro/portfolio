import { createContext } from 'react';

type ProjectContextProps = {
  find?(arg0: (p: any) => boolean): unknown;
  map?: any;
  id: string;
  img: string;
  route: string;
  skills: string[];
  about: string[];
  deploy: string;
  repo: string;
  demo: string;
};

const projectsData: ProjectContextProps[] = [
  {
    id: 'Feet First',
    img: 'assets/projects/img/feet-first.png',
    route: '/feet-first',
    skills: [
      'HTML & CSS',
      'Typescript',
      'React',
      'Tailwind',
      'Next.js',
      'NextAuth.js',
      'Redux',
      'API',
      'MongoDB',
    ],
    about: [
      "This project is a  modern ecommerce site! It's built with Next.js and TypeScript, styled using Tailwind CSS, and spiced up with Framer Motion for some cool animations.",
      "We've got an admin route with a CMS to make content management super easy. The backend API is connected to MongoDB, keeping our data handling smooth and efficient. We're using Redux for state management, and NextAuth for authentication.",
    ],
    deploy: 'https://feet-first-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/feet-first',
    demo: 'assets/projects/videos/feet-first.mp4',
  },
  {
    id: 'Carent',
    img: 'assets/projects/img/carent.png',
    route: '/carent',
    skills: ['HTML & CSS', 'React', 'Next.js', 'Typescript', 'Tailwind', 'API'],
    about: [
      'This project is a car rental dealership landing page built with Next.js on top of React.',
      'It features modern concepts such as pagination, a search engine with filters, and API consumption.',
      'The design aims to be intuitive, providing users with a seamless experience.',
    ],
    deploy: 'https://levymonteiro.github.io/carent/',
    repo: 'https://github.com/LevyMonteiro/carent',
    demo: 'assets/projects/videos/carent.mp4',
  },
  {
    id: 'Random Quote Machine',
    img: 'assets/projects/img/random-quote-machine.png',
    route: '/random-quote-machine',
    skills: ['HTML & CSS', 'Javascript', 'React', 'Sass', 'API'],
    about: [
      "Welcome to the Random Quote Machine, an application that generates random quotes through a dedicated quotes API. Each click on the 'New Quote' button or page reload brings a fresh perspective to your screen.",
      'This project is built with React and styled using SASS for easy maintenance and updates.',
    ],
    deploy: 'https://random-quote-machine-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/random-quote-machine',
    demo: 'assets/projects/videos/random-quote-machine.mp4',
  },
  {
    id: 'Drum Machine',
    img: 'assets/projects/img/drum-machine.png',
    route: '/drum-machine',
    skills: ['HTML & CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    about: [
      'Welcome to our drum pad machine simulator! This application provides a realistic drumming experience, allowing you to interact with drum pads effortlessly. You have the option to click on the virtual pads or use the corresponding keys on your keyboard for an immersive experience.',
      "Whether you're a music enthusiast or just looking to have some fun, our drum pad machine is designed to deliver an enjoyable and interactive experience. Start creating beats with ease, and let the rhythm flow!",
    ],
    deploy: 'https://drum-machine-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/drum-machine',
    demo: 'assets/projects/videos/drum-machine.mp4',
  },
  {
    id: 'Timer',
    img: 'assets/projects/img/timer.png',
    route: '/timer',
    skills: [
      'HTML & CSS',
      'Javascript',
      'Vite',
      'React',
      'Sass',
      'ESLint',
      'Prettier',
      'Lucide',
    ],
    about: [
      'Discover a meticulously crafted timer countdown designed to enhance focus during study sessions, offering Session and Break types inspired by the Pomodoro technique.',
      'This React-based application not only leverages hooks for efficient state management but also employs the Context API to seamlessly share data between components. The toggle theme functionality ensures a personalized experience, with changes persistently stored in the browser through local storage.',
    ],
    deploy: 'https://timer-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/timer',
    demo: 'assets/projects/videos/timer.mp4',
  },
  {
    id: 'Calculator',
    img: 'assets/projects/img/calculator.png',
    route: '/calculator',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    about: [
      'Developed a calculator in JavaScript using React components, hooks, and states.',
      'Used Tailwind and other technologies to style the calculator, ensuring an intuitive and user-friendly interface.',
      'Enhanced the usability of the calculator, allowing users to perform calculations conveniently through the keyboard or by clicking on screen elements.',
    ],
    deploy: 'https://calculator-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/calculator',
    demo: 'assets/projects/videos/calculator.mp4',
  },
];

export const ProjectsContext = createContext<{
  projectsData: ProjectContextProps[];
}>({
  projectsData,
});

export default function ProjectContextProvider({ children }: any) {
  return (
    <ProjectsContext.Provider value={{ projectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
}
