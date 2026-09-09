import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <ul className="nav-bar">
        <div className="left">
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </div>
        <li>
          <button className="resume">
            <a className="empty" href="/Resume.pdf">
              Resume
            </a>
          </button>
        </li>
      </ul>

      <div className="hero">
        <div className="header">
          <p>Hey there!</p>
          <p>I&apos;m Amelia</p>
        </div>

        <div className="scroll-group">
          <a className="scroll" href="#about-me">
            Click here or scroll down to learn more about me!
          </a>
          <a className="arrow" href="#about-me">
            ^
          </a>
        </div>
      </div>

      <div id="about-me" className="about-me-section">
        <div className="about-me-text">
          <p className="about-me-header">About Me</p>
          <p className="about-me-paragraph subtext">
            Welcome to my website! My name is Amelia Kemp, and I am a second-year
            Software Engineering student at the University of Waterloo. I am a
            hardworking and creative individual who is passionate about learning!
            Outside of school and work, I enjoy playing soccer, crocheting, and
            crafting. Feel free to snoop around my website to learn more about my
            programming experience and projects!
          </p>
        </div>
        <img src="/photos/IMG_4431 2.jpg" alt="photo of me" />
      </div>

      <div id="contact">
        <p className="contact-header">Contact Me!</p>
        <div className="contact-content">
          <div className="linkedin contact">
            <p className="subtext">Connect with me on Linkedin:</p>

            <p className="subtext">
              <a
                href="https://www.linkedin.com/in/amelia-kemp/"
                className="contact-link"
              >
                <img
                  src="/photos/Linkedin_logo.png"
                  alt="LinkedIn logo"
                  className="logo"
                />
                amelia-kemp
              </a>
            </p>
          </div>

          <div className="email contact">
            <p className="subtext">Email me at:</p>
            <p className="subtext">
              <a href="mailto:hello@ameliakemp.dev" className="contact-link">
                <img src="/photos/email-logo.webp" alt="Gmail logo" className="logo" />
                hello@ameliakemp.dev
              </a>
            </p>
          </div>

          <div className="github contact">
            <p className="subtext">View my GitHub:</p>
            <p className="subtext">
              <a href="https://github.com/amckemp" className="contact-link">
                <img src="/photos/github-logo.png" alt="GitHub logo" className="logo" />
                amckemp
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
