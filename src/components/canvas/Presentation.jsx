import React, { useState, useEffect, useRef } from 'react';
import './presentation.css';

function Presentation() {
  const textToType = "  Frontend Developer take a look";
  const [typedText, setTypedText] = useState('');
  const charIndex = useRef(0);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (charIndex.current < textToType.length) {
        setTypedText((prevText) => prevText + textToType.charAt(charIndex.current));
        charIndex.current += 1;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => {
      clearInterval(typingTimer);
    };
  }, []);

  return (
    <div className='canvaBG'>
      <section className='canvaP'>
        <div>
          <h1 className='presentation'>
            Hi, I'm{" "}
            <span>
              Lucas Torres
            </span>
          </h1>
          <p>
            a {typedText}
          </p>
        </div>
        <div>
          <img src="../images/me.png" alt="me" />
        </div>
      </section>
    </div>
  );
}

export default Presentation;