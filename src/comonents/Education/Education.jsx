import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section
      id='education'
      className='py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans'
    >
      {/* Section Title */}
      <div className='text-center mb-16 max-w-3xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>EDUCATION</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-4 rounded-full'></div>
        <p className='text-gray-300 text-base sm:text-lg'>
          A timeline of my academic background, degrees, and certifications achieved over the years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
  {education.map((data) => (
      
      <div
  key={data.id}
  className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#111827] p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-purple-500/30 hover:border-purple-500"
>
  {/* Gradient Blur */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>

  {/* Card Content */}
  <div className="relative z-10">

    {/* Logo */}
    <div className="w-16 h-16 rounded-full bg-white overflow-hidden shadow-lg mb-5">
      <img
        src={data.img}
        alt={data.degree}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Degree */}
    <h3 className="text-xl font-semibold text-white">
      {data.degree}
    </h3>

    {/* School */}
    <p className="text-gray-400 mt-1">
      {data.school}
    </p>

    {/* Date */}
    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-xs border border-purple-500/30">
      {data.date}
    </span>

    {/* Description */}
    <p className="mt-5 text-gray-300 text-sm leading-7">
      {data.desc}
    </p>

    {/* Skills */}
    {data.skills && (
      <div className="mt-6">
        <h5 className="text-white text-sm font-semibold mb-3">
          Technologies / Subjects
        </h5>

        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs transition duration-300 hover:bg-purple-500 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}

  </div>
    </div>
  ))}
</div>
      
    </section>
  )
}

export default Education
