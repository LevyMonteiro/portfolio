import { ProjectsContext } from './context/ProjectsContext';
import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  const { projectsData } = useContext(ProjectsContext);
  const project0 = projectsData[0];
  const project1 = projectsData[1];
  const project2 = projectsData[2];
  const project3 = projectsData[3];
  const project4 = projectsData[4];
  const project5 = projectsData[5];

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      Component: Root,
    },
    {
      path: project0.route,
      element: (
        <ProjectPage
          key={project0.route}
          skills={project0.skills}
          about={project0.about}
          id={project0.id}
          deploy={project0.deploy}
          repo={project0.repo}
          demo={project0.demo}
        />
      ),
    },
    {
      path: project1.route,
      element: (
        <ProjectPage
          key={project1.route}
          skills={project1.skills}
          about={project1.about}
          id={project1.id}
          deploy={project1.deploy}
          repo={project1.repo}
          demo={project1.demo}
        />
      ),
    },
    {
      path: project2.route,
      element: (
        <ProjectPage
          key={project2.route}
          skills={project2.skills}
          about={project2.about}
          id={project2.id}
          deploy={project2.deploy}
          repo={project2.repo}
          demo={project2.demo}
        />
      ),
    },
    {
      path: project3.route,
      element: (
        <ProjectPage
          key={project3.route}
          skills={project3.skills}
          about={project3.about}
          id={project3.id}
          deploy={project3.deploy}
          repo={project3.repo}
          demo={project3.demo}
        />
      ),
    },
    {
      path: project4.route,
      element: (
        <ProjectPage
          key={project4.route}
          skills={project4.skills}
          about={project4.about}
          id={project4.id}
          deploy={project4.deploy}
          repo={project4.repo}
          demo={project4.demo}
        />
      ),
    },
    {
      path: project5.route,
      element: (
        <ProjectPage
          key={project5.route}
          skills={project5.skills}
          about={project5.about}
          id={project5.id}
          deploy={project5.deploy}
          repo={project5.repo}
          demo={project5.demo}
        />
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
