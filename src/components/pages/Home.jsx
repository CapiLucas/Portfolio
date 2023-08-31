import React from 'react'
import Presentation from '../canvas/Presentation'
import Introduction from '../canvas/introduction'
import Skills from '../canvas/skills'
import Social from '../canvas/socials'

function Home() {
  return (
    <div className='main'>
        <Presentation/>
        <Introduction/>
        <Skills/>
        <Social/>
    </div>
  )
}

export default Home