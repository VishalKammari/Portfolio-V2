import React from 'react'
import Hero from './Hero'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Achievements from './Achievements'
import Education from './Education'
import Ending from './Ending'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <div className='h-20 sm:h-24'></div>
      <div className='border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300'>
            <Hero />
            <Projects />
            <WorkExperience/>
            <Achievements />
            <Education />
            <Ending />
            <Footer />
        </div>
        <div className='h-5'></div>
      <div className='border flex items-center justify-center min-h-10 text-center py-3 px-4 border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xl transition-all duration-300'>
        <h1 className='text-black/70 dark:text-zinc-400 text-sm sm:text-base'>Never forget, why you started </h1><span>❤️</span>
        </div>
      <div className='h-20 sm:h-24'></div>
    </div>
  )
}

export default Home