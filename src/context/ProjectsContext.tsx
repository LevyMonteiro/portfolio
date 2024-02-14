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
    id: 'Random Quote Machine',
    img: 'src/assets/img/random-quote-machine.png',
    route: '/random-quote-machine',
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'Sass', 'API'],
    about: [
      "Welcome to the Random Quote Machine, an application that generates random quotes through a dedicated quotes API. Each click on the 'New Quote' button or page reload brings a fresh perspective to your screen.",
      'This project is built with React and styled using SASS for easy maintenance and updates.',
    ],
    deploy: 'https://random-quote-machine-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/random-quote-machine',
    demo: 'src/assets/projects/random-quote-machine.mp4',
  },
  {
    id: 'Social Tree',
    img: 'src/assets/img/social-tree.png',
    route: '/social-tree',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    about: [
      'This is an alike linktree site, simple and functional that contain my social media and ways to contact-me.',
    ],
    deploy: 'https://social-tree-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/social-tree',
    demo: 'src/assets/projects/social-tree.mp4',
  },
  {
    id: 'Landing Page',
    img: 'src/assets/img/landing-page.png',
    route: '/landing-page',
    skills: ['HTML', 'CSS'],
    about: [
      "This is a product page that i've created to mimic a real product page of a brand.",
    ],
    deploy: 'https://levymonteiro.github.io/landing-page/',
    repo: 'https://github.com/LevyMonteiro/landing-page',
    demo: 'src/assets/projects/landing-page.mp4',
  },
  {
    id: 'Drum Machine',
    img: 'src/assets/img/drum-machine.png',
    route: '/drum-machine',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    about: [
      'Welcome to our drum pad machine simulator! This application provides a realistic drumming experience, allowing you to interact with drum pads effortlessly. You have the option to click on the virtual pads or use the corresponding keys on your keyboard for an immersive experience.',
      "Whether you're a music enthusiast or just looking to have some fun, our drum pad machine is designed to deliver an enjoyable and interactive experience. Start creating beats with ease, and let the rhythm flow!",
    ],
    deploy: 'https://drum-machine-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/drum-machine',
    demo: 'src/assets/projects/drum-machine.mp4',
  },
  {
    id: 'Timer',
    img: 'src/assets/img/timer.png',
    route: '/timer',
    skills: [
      'HTML',
      'CSS',
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
    demo: 'src/assets/projects/timer.mp4',
  },
  {
    id: 'Calculator',
    img: 'src/assets/img/calculator.png',
    route: '/calculator',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    about: [
      'Developed a calculator in JavaScript using React components, hooks, and states.',
      'Used Tailwind and other technologies to style the calculator, ensuring an intuitive and user-friendly interface.',
      'Enhanced the usability of the calculator, allowing users to perform calculations conveniently through the keyboard or by clicking on screen elements.',
    ],
    deploy: 'https://calculator-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/calculator',
    demo: 'src/assets/projects/calculator.mp4',
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
