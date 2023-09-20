import React from "react";
import "./introduction.css";

function Introduction() {
    
  return (
    <div>
      <div className="information">
        <p className="SecundaryText">
          Introduction
          <h1>About me</h1>
            I am a junior Front-end Developer, mainly focusing on React, for creating cool user interfaces..<br></br>
            Web design has interested me since I was 16. I am in constant training, and I'm passionate about creating innovative solutions.<br></br>
            Let's work together on your next project.
        </p>
      </div>
      <div className="container">
        <div className="card">
            <div className="cardContent">
                <img className="cardImage" src="../images/responsive.png" alt="responsive" />
                <h2 className="description">
                    Responsive  <br/>
                    Design
                </h2>
            </div>
            <div className="card3d">
                <img className="img3d" src="../images/responsive.png" alt="img3d" />
                <h2 className="text3d">
                    Responsive <br/>
                    Desing
                </h2>
            </div>
        </div>
        <div className="card">
            <div className="cardContent">
                <img className="cardImage" src="../images/frontend.png" alt="frontend" />
                <h2 className="description">
                    Frontend Web <br/>
                    Development
                </h2>
            </div>
            <div className="card3d">
                <img className="img3d" src="../images/frontend.png" alt="img3d" />
                <h2 className="text3d">
                    Frontend Web <br/>
                    Development
                </h2>
            </div>
        </div>
        <div className="card">
            <div className="cardContent">
                <img className="cardImage" src="../images/optimization.png" alt="optimization" />
                <h2 className="description">
                    Website <br/>
                    Optimization
                </h2>
            </div>
            <div className="card3d">
                <img className="img3d" src="../images/optimization.png" alt="img3d" />
                <h2 className="text3d">
                    Website <br/>
                    Optimization
                </h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
