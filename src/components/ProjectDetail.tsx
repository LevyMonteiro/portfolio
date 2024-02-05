import Card from './Card';

export default function ProjectDetail({
  skills,
  id,
  deploy,
  repo,
  demo,
}: {
  skills: [];
  id: string;
  deploy: string;
  repo: string;
  demo: string;
}) {
  return (
    <section>
      <h1>{id}</h1>

      <div id='skills'>
        {skills.map((skill) => (
          <Card skill={skill} />
        ))}
      </div>

      <div id='links'>
        <h2>Links</h2>
        <ul>
          <li id='deploy'>{deploy}</li>
          <li id='repo'>{repo}</li>
        </ul>

        <video src={demo}></video>
      </div>
    </section>
  );
}
