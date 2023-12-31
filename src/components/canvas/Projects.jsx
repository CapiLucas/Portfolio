import React from "react";
import "./projects.css";
function Projects() {
  return (
    <div>
      <div className="jorney">
        <p>MY WORK</p>
        <h1 className="titles">Projects.</h1>
        <p>
          The following projects show my skills and my growth throughout my
          studies, both formally and through self-study.
          <br />
          Each project is briefly described with links to code repositories and
          live demos.
          <br />
          they reflect my ability to solve complex problems, work with different
          technologies and manage projects effectively.
        </p>
      </div>
      <div className="projects">
        <div className="ProjectsContainer">
          <div className="Pbackground">
            <div className="imgContainer">
              <a
                href="https://artoriusgaming.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/Artorius.png" alt="gamingecommerce" />
              </a>
            </div>
            <div className="cardInfo">
              <div>
                <h2>Artorius Gaming</h2>
                <p>
                    Gaming e-commerce website made as a final project on my ReactJS course
                </p>
              </div>
              <div className="technologies">
                <div className="texts">
                  <p className="bluetext">#html</p>
                  <p className="greentext">#javascript</p>
                  <p className="orangetext">#react</p>
                  <p className="rosetext">#bootstrap</p>
                </div>
                <div>
                  <a
                    href="https://github.com/CapiLucas/Artorius-Gaming-update"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="githubLink">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Pbackground">
            <div className="imgContainer">
              <a
                href="https://capilucas.github.io/Murrgana-Watches/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/Murrgana.png" alt="gamingecommerce" />
              </a>
            </div>
            <div className="cardInfo">
              <div>
                <h2>Murrgana Shop</h2>
                <p>
                    Watch e-commerce website made as a final project on my initial JavaScript course
                </p>
              </div>
              <div className="technologies">
                <div className="texts">
                  <p className="bluetext">#html</p>
                  <p className="greentext">#javascript</p>
                  <p className="orangetext">#bootstrap</p>
                </div>
                <div>
                  <a
                    href="https://github.com/CapiLucas/Murrgana-Watches"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="githubLink">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
