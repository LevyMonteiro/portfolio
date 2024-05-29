import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProjectDetail from '../components/sections/ProjectDetail';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <Nav currentPage='projectPage' />
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
      <Footer currentPage='projectPage' />
    </motion.div>
  );
}
