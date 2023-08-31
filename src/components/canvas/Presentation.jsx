import React from 'react';
import './presentation.css';

function Presentation() {
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
                    a frontend Developer <br></br>
                    Take a look
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