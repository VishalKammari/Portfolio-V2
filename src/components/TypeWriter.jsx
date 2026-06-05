import React from 'react'
import Typewriter from 'typewriter-effect';
const TypeWriter = () => {
  return (
    <div className="text-zinc-700 bg-amber-200 text-md">
        <Typewriter
        options={{
        strings: ['Full-Stack Dev', 'Programmer','OSS Contributor'],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 50,
        }}
        />
    </div>
  )
}

export default Typerighter