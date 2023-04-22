import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
export default function TypeWritter() {
  return (
    <div className='typeRiter' >
      <TypeWriterEffect
        startDelay={2000}
        cursorColor="black"
        multiText={[
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
