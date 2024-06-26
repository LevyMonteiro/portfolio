import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from './context/ProjectsContext';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProjectPage from './pages/ProjectPage';

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export default function App() {
  const { projectsData } = useContext(ProjectsContext);

  const routes: RouteConfig[] = projectsData.map(
    (project: {
      route: string;
      skills: string[];
      about: string[];
      id: string;
      deploy: string;
      repo: string;
      demo: string;
    }) => ({
      path: project.route,
      element: (
        <ProjectPage
          key={project.route}
          skills={project.skills}
          about={project.about}
          id={project.id}
          deploy={project.deploy}
          repo={project.repo}
          demo={project.demo}
        />
      ),
    })
  );

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage key='errorPage' />,
      Component: Root,
    },
    ...routes,
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
