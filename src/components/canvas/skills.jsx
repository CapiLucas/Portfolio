import React from 'react'
import "./skills.css"

function Skills() {
  return (
    <div>
        <h2 className='skill-text'>Skills:</h2>
        <div className='skills'>
            <div className='html'>
                <img className='skill-img' src="../images/html.png" alt="html"/>
            </div>
            <div className='css'>
                <img className='skill-img' src="../images/css.png" alt="css"/>
            </div>
            <div className='bootstrap'>
                <img className='skill-img' src="../images/bootstrap.png" alt="bootstrap"/>
            </div>
            <div className='javascript'>
                <img className='skill-img' src="../images/javascript.png" alt="javascript"/>
            </div>
            <div className='github'>
                <img className='skill-img' src="../images/git.png" alt="github"/>
            </div>
            <div className='react'>
                <img className='skill-img' src="../images/reactjs.png" alt="react"/>
            </div>
        </div>
    </div>
  )
}

export default Skills