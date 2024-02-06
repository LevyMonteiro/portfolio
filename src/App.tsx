import { ProjectsContext } from './context/ProjectsContext';
import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  const { projectsData } = useContext(ProjectsContext);

  const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: '/projectName',
    //   element: (
    //     <>
    //       {projectsData.map(
    //         (data: {
    //           skills: string[];
    //           id: string;
    //           deploy: string;
    //           repo: string;
    //           demo: string;
    //         }) => {
    //           <ProjectDetail
    //             skills={data.skills}
    //             id={data.id}
    //             deploy={data.deploy}
    //             repo={data.repo}
    //             demo={data.demo}
    //           />;
    //         }
    //       )}
    //       ;
    //     </>
    //   ),
    // },
  ]);
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}
