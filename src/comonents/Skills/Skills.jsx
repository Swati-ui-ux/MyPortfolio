import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from "react-parallax-tilt"

const Skills = () => {
  return (
    <section id='skills' className='py-24 pb-[12vw]  md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient '>
      <div className='text-center mt-8'>
      <h2 className='text-3xl sm:text-4xl font-bold text-white'>Skills</h2>
      <div className='w-24 h-1 bg-[#8245e2] mx-auto mt-2'></div>
      <p className='text-gray-400 mt-4 text-lg font-semibold'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima reiciendis perferendis, sint iste hic reprehenderit assumenda autem laudantium expedita!</p>
      </div>
      {/* skill categories */}
        
      <div className='flex flex-wrap px-5 gap-1 lg:gap-5 py-10 justify-between'>{SkillsInfo.map((category) => (<div key={category.title} className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
      <Tilt>
      <h3 className=' text-2xl sm:text-3xl text-gray-400 mb-4 text-center'>{category.title}</h3>
        {/* skill item */}
        <div className=' grid grid-cols-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2  gap-4 w-full'>{category.skills.map((skill) =>
          <div
            key={skill.name}
            className='flex md:text-2xl items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-4 px-4 sm:py-2 sm:px-2 text-center'
          >
            <img src={skill.logo} alt={skill.name}
            className='w-6 h-6 sm:w-8 sm:h-8'
            />
            <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
          </div>
        )}</div>
      </Tilt>
      </div>))}</div>
    </section>
  )
}

export default Skills