import React from 'react'
import { experiences } from '../../constants'

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans '
    >
      {/* Section Title */}
      <div className='text-center mb-16 max-w-3xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Work Experience</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-4 rounded-full'></div>
        <p className='text-gray-300 text-base sm:text-lg'>
          A collection of my professional experience and roles I've held across various organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className='relative max-w-6xl mx-auto'>
        {/* Vertical line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden md:block'></div>

        {/* Experience entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col md:flex-row items-start mb-16 relative ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline circle */}
            <div className='absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-1/2 md:mr-4 bg-gray-900 border-4 border-purple-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center z-10 md:mx-0'>
              <img
                src={experience.img}
                alt={experience.company}
                className='w-4/5 h-4/5 object-contain rounded-full'
              />
            </div>

            {/* Content box */}
            <div
              className={`w-full md:w-5/12 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 transform transition-all duration-300 hover:shadow-purple-500/50 hover:-translate-y-2
                mt-8 md:mt-0
                ${index % 2 === 0 ? 'md:ml-auto md:mr-2' : 'md:mr-auto md:ml-2'}
              `}
            >
              {/* Date (mobile only) */}
              <p className='text-purple-400 text-sm font-medium mb-2 block md:hidden'>
                {experience.date}
              </p>

              {/* Header with logo and info */}
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md'>
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className='w-full h-full object-contain p-1'
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-xl font-semibold text-white truncate'>{experience.role}</h3>
                  <h4 className='text-purple-300 text-base font-medium truncate'>{experience.company}</h4>
                  <p className='text-gray-400 text-sm mt-1 hidden md:block'>{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className='mt-4 text-gray-300 text-sm leading-relaxed'>{experience.desc}</p>

              {/* Skills */}
              <div className='mt-5 pt-4 border-t border-gray-700'>
                <h5 className='font-medium text-white text-sm mb-2'>Technologies Used:</h5>
                <ul className='flex flex-wrap gap-2'>
                  {experience.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className='bg-gradient-to-r from-purple-700 to-indigo-700 text-gray-200 px-3 py-1 text-xs rounded-full border border-purple-500'
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

