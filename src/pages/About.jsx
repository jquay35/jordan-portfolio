function About() {
  return (
    <main className="page twoColumnPage">
      <div className="pageText">
        <h1>About Me</h1>

        <p>
          My name is Jordan Quay. I am a Multimedia Design student at the
          University of Central Florida with a passion for film, photography,
          video production, entertainment, and creative storytelling.
        </p>

        <p>
          I have worked with The Walt Disney Company for over a year, where I
          have gained experience creating memorable guest experiences.
        </p>

        <p>
          My creative interests include cinematography, digital media, themed
          entertainment, aviation, and immersive storytelling.
        </p>

        <h2>Skills</h2>

        <ul>
          <li>Video Production</li>
          <li>Photography</li>
          <li>Editing</li>
          <li>Creative Storytelling</li>
          <li>Project Management</li>
          <li>HTML, CSS and React</li>
          <li>Guest Experience & Entertainment</li>
        </ul>
      </div>

      <img
        className="sideImage"
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
        alt="Creative filmmaking"
      />
    </main>
  );
}

export default About;