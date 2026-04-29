function Projects() {
  return (
    <main className="page">
      <h1>Featured Projects</h1>

      <p>
        These projects show my interest in cinematography, visual design,
        storytelling, and creative media.
      </p>

      <div className="projectGrid">

        <div className="projectCard">
          <img
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
            alt="Creative city lights"
          />

          <h2>Orlando Through My Lens</h2>

          <p>
            A photography and video project showing Orlando through my own
            creative perspective.
          </p>

          <a href="https://www.jordan-quays-journey.com/" target="_blank">
            View Project
          </a>
        </div>


        <div className="projectCard">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            alt="Drone project"
          />

          <h2>SOCIALISTA Drone Footage</h2>

          <p>
            A cinematic project focused on movement, atmosphere, and strong
            visual energy.
          </p>

          <a href="https://www.jordan-quays-journey.com/" target="_blank">
            View Project
          </a>
        </div>


        <div className="projectCard">
          <img
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80"
            alt="Country club video"
          />

          <h2>Commercial Video Work</h2>

          <p>
            Promotional video work connected to real-world client projects,
            planning, filming, and editing.
          </p>

          <a href="https://www.jordan-quays-journey.com/" target="_blank">
            View Project
          </a>
        </div>

      </div>
    </main>
  );
}

export default Projects;