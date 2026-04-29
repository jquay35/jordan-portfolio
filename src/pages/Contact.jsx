import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setError("Please fill out every box.");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Your message has been submitted!");
  }

  return (
    <main className="page twoColumnPage">
      <div className="pageText">
        <h1>Contact Me</h1>

        <p>
          Reach out to connect, collaborate, or view more of my creative work.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "green" }}>{success}</p>

        <h2>Links</h2>

        <a href="https://www.jordan-quays-journey.com/" target="_blank">
          Original Portfolio
        </a>
      </div>

      <img
        className="sideImage"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        alt="Creative workspace"
      />
    </main>
  );
}

export default Contact;