import React from 'react'

function Landing() {
  return (
    <div
     className='Landing-video'>
      <video src={require('../images/beach2.mp4')}
        autoPlay muted loop />
    </div>
  )
}

export default Landing

