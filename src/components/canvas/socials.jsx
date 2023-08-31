import React from 'react'
import "./social.css"



function Social() {
  return (
    <div>
        <div className='social-text'>
            <p>
            Connect with me
            <h2>Social Links:</h2>
            </p>
        </div>
       <div className='animations'>
            <div className='social-img'>
                <a href="lucas7320030@hotmail.com"><img src="../images/mail.png" alt="mail" /></a>
            </div>
            <div className='social-img'>
                <a href="https://www.linkedin.com/in/lucas-torres-a56a8027a/" target='blank'><img src="../images/linkedin-social.png" alt="linkedin" /></a>
            </div>
            <div className='social-img'>
                <a href="https://github.com/CapiLucas" target='blank'><img src="../images/github.png" alt="github" /></a>
            </div>
       </div>
    </div>
    
  )
}

export default Social