import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
export default function TypeWritter() {
  return (
    <div className='typeRiter' >
      <TypeWriterEffect
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
         'Prakash Kumar Jena',
         'Self-Motivated',
         'Creative',
         'Team Player'
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        multiTextLoop
      />
    </div>
  )
}
