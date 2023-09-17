import * as React from "react";
import "./timeline.css";

export default function CustomizedTimeline() {
  return (
    <div>
      <div class="timeline-wrapper">
        <div class="center-line">
          <a href="./experience" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Instituto Jose Manuel Estrada</span>
              <span>2021</span>
            </div>
            <p className="TimelineP">
              During my time in high school, I gained a solid academic
              foundation covering a variety of subjects. This period was crucial
              for my personal growth and development of fundamental skills.
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-code"></i>
            <div class="details">
              <span class="title">Coderhouse Frontend course</span>
              <span>Jan-Aug 2023 </span>
            </div>
            <p className="TimelineP">
              I completed a Front-end Development Course at Coderhouse, where I
              gained valuable knowledge and hands-on experience in creating user
              interfaces and interactive websites. This course equipped me with
              the skills needed to design and optimize the user experience.
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-file-code"></i>
            <div class="details">
              <span class="title">Coderhouse Backend course</span>
              <span>Actually</span>
            </div>
            <p className="TimelineP">
              Currently, I'm enrolled in a Backend Development Course at
              Coderhouse. This program focuses on server-side programming,
              databases, and other essential components that power web
              applications. It's equipping me with the skills to handle the
              logic and functionality behind web applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
