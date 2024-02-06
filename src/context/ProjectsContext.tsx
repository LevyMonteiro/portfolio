import { createContext } from 'react';

type ProjectContextProps = {
  map: any;
  id: string;
  img: string;
  route: string;
  skills: string[];
  deploy: string;
  repo: string;
  demo: string;
};

const projectsData: ProjectContextProps = [
  {
    id: 'Random Quote Machine',
    img: 'src/assets/img/random-quote-machine.png',
    route: './random-quote-machine',
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'Sass', 'API'],
    deploy: 'https://random-quote-machine-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/random-quote-machine',
    demo: 'https://private-user-images.githubusercontent.com/102385102/289199643-d22bb7cf-7346-46b3-a9be-9f927e5a5e6f.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxNTg0MzcsIm5iZiI6MTcwNzE1ODEzNywicGF0aCI6Ii8xMDIzODUxMDIvMjg5MTk5NjQzLWQyMmJiN2NmLTczNDYtNDZiMy1hOWJlLTlmOTI3ZTVhNWU2Zi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQxODM1MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNGI3ZDc2NjdjMmQ4M2EzZTNhMmY3MDk1MDM3NTE4YjZlNWI4NzRhN2M4ODJiYjQ4ODZhMmEwZDA1MzVkYzFlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gxFG24tXGeduNBlPQXi0GJ8HqG4Fea1sjruIieuoqWM',
  },
  {
    id: 'Social Tree',
    img: 'src/assets/img/social-tree.png',
    route: './social-tree',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    deploy: 'https://social-tree-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/social-tree',
    demo: 'https://private-user-images.githubusercontent.com/102385102/298417718-98641b9e-e78a-400b-b9ce-6f6e13a18a4d.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxNTg0MjUsIm5iZiI6MTcwNzE1ODEyNSwicGF0aCI6Ii8xMDIzODUxMDIvMjk4NDE3NzE4LTk4NjQxYjllLWU3OGEtNDAwYi1iOWNlLTZmNmUxM2ExOGE0ZC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQxODM1MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNjZkODk4ZDc2ZGRmY2ExOTdhYTcwM2JjZWI2NjMwOWM3NjUwNzkxYjBkY2E0YjQ0NWZmZmU3MTFkYTBiZGQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.fRfNyl0y43KK0liz5GsfyVNuNePZIDWNO-vr_tZdXVQ',
  },
  {
    id: 'Landing Page',
    img: 'src/assets/img/landing-page.png',
    route: './landing-page',
    skills: ['HTML', 'CSS'],
    deploy: 'https://levymonteiro.github.io/landing-page/',
    repo: 'https://github.com/LevyMonteiro/landing-page',
    demo: 'https://private-user-images.githubusercontent.com/102385102/266139459-12005ed0-7b6e-4b1a-9562-0ac75b79c52e.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxNTgyOTYsIm5iZiI6MTcwNzE1Nzk5NiwicGF0aCI6Ii8xMDIzODUxMDIvMjY2MTM5NDU5LTEyMDA1ZWQwLTdiNmUtNGIxYS05NTYyLTBhYzc1Yjc5YzUyZS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQxODMzMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMDFlOTE2YzA3YjFiYWVmMjc2ZTRjZmE2OWY2ZjU5MjRlZTQ3NjVmN2YyOWJmZTQ3Nzk3ZGJkMDEzYTAzZDczJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.t_P70I9-WtfI96dv4nLYeho_mnQNijz-VzwdZkE_Yy0',
  },
  {
    id: 'Drum Machine',
    img: 'src/assets/img/drum-machine.png',
    route: './drum-machine',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    deploy: 'https://drum-machine-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/drum-machine',
    demo: 'https://private-user-images.githubusercontent.com/102385102/296774275-249b59a3-1ecb-4941-b600-67a0ee80c7d3.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxNTgzNTMsIm5iZiI6MTcwNzE1ODA1MywicGF0aCI6Ii8xMDIzODUxMDIvMjk2Nzc0Mjc1LTI0OWI1OWEzLTFlY2ItNDk0MS1iNjAwLTY3YTBlZTgwYzdkMy5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQxODM0MTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNWE1MGFhYTg2ZGY0YzFhNjJkNDE3MmU0MTJhYTUyMTk0MDVkZmM3Mzc4M2IyNzU0NDE0ZDIzM2U3MzIxZjAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.p0jbB6Q1kLaD5-vsbc6dMoOxmjUmFZXtxK1yhHWfAbs',
  },
  {
    id: 'Timer',
    img: 'src/assets/img/timer.png',
    route: './timer',
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
    deploy: 'https://timer-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/timer',
    demo: 'https://private-user-images.githubusercontent.com/102385102/293784659-f2476d23-852e-4db9-8b4c-a89ced97794c.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxNDU4MTMsIm5iZiI6MTcwNzE0NTUxMywicGF0aCI6Ii8xMDIzODUxMDIvMjkzNzg0NjU5LWYyNDc2ZDIzLTg1MmUtNGRiOS04YjRjLWE4OWNlZDk3Nzk0Yy5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQxNTA1MTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZjE1NTY3ZWUwZjAxODRlNTk3ZDUwMWZlZWE0ODgwNmZlN2Q0YmNmYjk1OTM2OGFhOWJmNWQ4Y2U5M2Q1OWI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.xkC4vrecD9gZzKwN9uJ5AKv4CP9mG1MiHNSwOjH1SiQ',
  },
  {
    id: 'Calculator',
    img: 'src/assets/img/calculator.png',
    route: './calculator',
    skills: ['HTML', 'CSS', 'Javascript', 'Vite', 'React', 'Tailwind'],
    deploy: 'https://calculator-levymonteiro.vercel.app/',
    repo: 'https://github.com/LevyMonteiro/calculator',
    demo: 'https://private-user-images.githubusercontent.com/102385102/270815065-eb497cc1-6f78-458f-ac40-d0ce902fff0e.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxNTg0MDksIm5iZiI6MTcwNzE1ODEwOSwicGF0aCI6Ii8xMDIzODUxMDIvMjcwODE1MDY1LWViNDk3Y2MxLTZmNzgtNDU4Zi1hYzQwLWQwY2U5MDJmZmYwZS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQxODM1MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OGE4YzY3ZmM2ZmIwNTVmNGIyZDIxNGE1NzMwMjY0YWIwMTJmZWMyNGMxNmE3NzU4N2FkNGRiMjMwZjJmOWViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.bUDh7mUauEQnGbGtvGVsTNpifNZ1LmE1UpLYlLlTI0k',
  },
];

export const ProjectsContext = createContext({ projectsData });

export default function ProjectContextProvider({ children }: any) {
  return (
    <ProjectsContext.Provider value={projectsData}>
      {children}
    </ProjectsContext.Provider>
  );
}
