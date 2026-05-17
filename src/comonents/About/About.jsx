import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from "react-parallax-tilt"
const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className=' flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side  */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 '>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>Hi, I am</h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Swati Singh</h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
          
            <span className='text-white p-2'>
            I am a
            </span>
            

<Typewriter
  words={['Fullstack Developer', 'App Developer', 'Coder', 'UI/UX Designer']}
  loop={0}
  cursor
  cursorStyle='|'
  typeSpeed={100}
  deleteSpeed={50}
  delaySpeed={2000}
/>
           
          </h3>
          
          {/* About me para */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed '>My name is Swati Singh. I am passionate about learning Frontend Development and am currently studying at Sharpener Tech. I have learned the fundamentals of HTML, CSS, and JavaScript. I am also familiar with React JS and modern styling frameworks like Tailwind CSS and Bootstrap. I enjoy creating responsive and interactive web designs.</p>
          {/* resume button */}
          <a
            href="https://drive.google.com/file/d/1f59NHg_Z6qgjvMOYIs2wvtBKHEI-bu8n/view?usp=drive_link"
            target='_blank'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 '
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow:"0 0 2px #8245ec,0 0 20px #8245ec"
            }}
          >DOWNLOAD RESUME</a>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2 flex justify-between md:justify-end '>
          <Tilt className='w-60 h-60 sm:w-64 sm:h-64 md:w-[23rem] md:h-[23rem] border-2 border-purple-700 rounded-full'
            tiltMaxAngleY={20}
            tiltMaxAngleX={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={100}
            gyroscope={true}
          >
          <img src="swati.jpeg" alt="swati" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
          </Tilt>
        </div>
        
      </div>
    
    </section>
  )
}

export default About