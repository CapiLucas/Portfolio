import React, { useState, useEffect, useRef } from 'react';
import './presentation.css';

function Presentation() {
  const mainText = "  Front-end Developer.";
  const lookText = "  Take a look!";
  const [mainTypedText, setMainTypedText] = useState('');
  const [lookTypedText, setLookTypedText] = useState('');
  const mainCharIndex = useRef(0);
  const lookCharIndex = useRef(0);

  useEffect(() => {
    const mainTypingTimer = setInterval(() => {
      if (mainCharIndex.current < mainText.length) {
        setMainTypedText((prevText) => prevText + mainText.charAt(mainCharIndex.current));
        mainCharIndex.current += 1;
      } else {
        clearInterval(mainTypingTimer);

        const lookTypingTimer = setInterval(() => {
          if (lookCharIndex.current < lookText.length) {
            setLookTypedText((prevText) => prevText + lookText.charAt(lookCharIndex.current));
            lookCharIndex.current += 1;
          } else {
            clearInterval(lookTypingTimer);
          }
        }, 100);
      }
    }, 100);

    return () => {
      clearInterval(mainTypingTimer);
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
          <p className='subtext'>
            a {mainTypedText} <br />
            {lookTypedText}
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