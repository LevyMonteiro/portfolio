export default function About() {
  return (
    <section
      id='about'
      className='grid grid-cols-2 gap-12 bg-neutral-950 py-32 px-60'
    >
      <div
        id='description'
        className='h-full text-center font-poppins flex flex-col gap-8'
      >
        <h2 className='text-4xl font-semibold'>Nice to meet you!</h2>

        <p className='text-left text-neutral-300'>
          I'm a Front-end web developer, I dedicate myself full time to
          programming work and studies. I consider myself passionate about
          everything that encompasses the technology area since always.
        </p>

        <p className='text-left text-neutral-300'>
          Before dedicating myself to the area I was a volunteer in the
          technology area of my church for a few years and I also did freelance
          work in photo shoots, filming weddings, and parties in general.
        </p>

        <p className='text-left text-neutral-300'>
          Always excited to learn and progress. I love collaborating, feel free
          to contact me.
        </p>
      </div>

      <div
        id='skills'
        className='h-full text-center font-poppins flex flex-col gap-8'
      >
        <h2 className='text-4xl font-semibold'>My Skills</h2>

        <p className='text-center text-neutral-300'>
          Some skills and technologies I’ve been working with recently:
        </p>
      </div>
    </section>
  );
}
