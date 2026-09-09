import { Footer } from "../components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <ul className="nav-bar">
        <div className="left">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a className="active" href="/projects">
              Projects
            </a>
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
          <p>Projects</p>
        </div>

        <div className="scroll-group">
          <a className="scroll" href="#projects">
            Click here or scroll down to learn about my projects!
          </a>
          <a className="arrow" href="#projects">
            ^
          </a>
        </div>
      </div>

      <div className="project-section" id="projects">
        <div className="project">
          <a href="https://amckemp.github.io/TOH-map/">
            <img
              src="/photos/TOH-map.png"
              alt="Image of TOH Map"
              className="project-image"
            />
          </a>
          <div className="project-text">
            <a href="https://amckemp.github.io/TOH-map/">
              Interactive Map for the uOttawa Department of Anesthesiology &amp;
              Pain Medicine
            </a>
            <div className="project-description">
              Interactive map produced for the University of Ottawa Department of
              Anesthesiology and Pain Medicine to show where department members
              have presented talks and workshops. Built using HTML, CSS and the
              JavaScript Leaflet library. Formatted for mobile devices.
            </div>
            <br />
            <a
              className="project-description"
              style={{ color: "#FCF9C6" }}
              href="https://www.uottawa.ca/faculty-medicine/anesthesiology/2021-23-annual-report/our-influence/presentations-lectures-workshops"
            >
              Click here to view the map through the uOttawa website!
            </a>
          </div>
        </div>

        <div className="project">
          <a href="https://chromewebstore.google.com/detail/product-joy-predictor/gdofpfiemcaellmhpjinbimdlanjmlen">
            <img
              src="/photos/product-joy-predictor.png"
              alt="Image of the Product Joy Predictor icon"
              className="project-image"
            />
          </a>
          <div className="project-text">
            <a href="https://chromewebstore.google.com/detail/product-joy-predictor/gdofpfiemcaellmhpjinbimdlanjmlen">
              Product Joy Predictor - Chrome Extension for Amazon
            </a>
            <div className="project-description">
              Chrome extension that uses the Laplacian Succession Theorem to show
              the probability of a user having a good experience with an Amazon
              product. Built using JavaScipt.
            </div>
          </div>
        </div>

        <div className="project">
          <a href="https://amckemp.github.io/etch-a-sketch/">
            <img
              src="/photos/etch-a-sketch.png"
              alt="Image of Etch-A-Sketch project"
              className="project-image"
            />
          </a>
          <div className="project-text">
            <a href="https://amckemp.github.io/etch-a-sketch/">Etch-A-Sketch</a>
            <div className="project-description">
              Online version of the classic drawing toy made using JavaScipt, HTML,
              and CSS. Built and augmented while following The Odin Project
              curriculum.
            </div>
          </div>
        </div>

        <div className="project">
          <a href="https://amckemp.github.io/rock-paper-scissors/">
            <img
              src="/photos/rock-paper-scissors.png"
              alt="Image of Rock Paper Scissors project"
              className="project-image"
            />
          </a>
          <div className="project-text">
            <a href="https://amckemp.github.io/rock-paper-scissors/">
              Rock Paper Scissors
            </a>
            <div className="project-description">
              Rock Paper Scissors game made using JavaScript, HTML, and CSS. Built
              and augmented while following The Odin Project curriculum.
            </div>
          </div>
        </div>

        <div className="view-more-section">
          <div className="view-more">
            View more of my projects and experience on my GitHub and my DMOJ:
          </div>
          <div className="view-more-links">
            <p className="subtext">
              <a href="https://github.com/amckemp" className="contact-link">
                <img
                  src="/photos/github-logo.png"
                  alt="GitHub logo"
                  className="logo"
                />
                github.com/amckemp
              </a>
            </p>
            <p className="subtext">
              <a href="https://dmoj.ca/user/amckemp" className="contact-link">
                <img src="/photos/dmoj.png" alt="DMOJ logo" className="logo" />
                dmoj.ca/user/amckemp
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
