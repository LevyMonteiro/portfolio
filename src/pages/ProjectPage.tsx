import Nav from '../components/Nav';
import ProjectDetail from '../components/sections/ProjectDetail';

export default function ProjectPage({
  id,
  skills,
  about,
  deploy,
  repo,
  demo,
}: {
  id: string;
  skills: string[];
  about: string[];
  deploy: string;
  repo: string;
  demo: string;
}) {
  return (
    <>
      <Nav currentPage='projectDetail' />
      <main>
        <ProjectDetail
          key={id}
          skills={skills}
          about={about}
          id={id}
          deploy={deploy}
          repo={repo}
          demo={demo}
        />
      </main>
    </>
  );
}
