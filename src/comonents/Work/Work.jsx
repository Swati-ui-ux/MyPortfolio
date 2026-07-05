import React, { useState } from 'react'
import { projects } from '../../constants'

const Work = () => {
  const [selectedProject,setSelectedProject] =useState(null)
  const handleOpenProjectModal = (project) => {
  setSelectedProject(project)
  }
  const handleCloseModal = (project) => {
  setSelectedProject(null)
  }
  return (
    <section id='project'
    className='py-20 pb-20 px-[12vw] md:px-[7vw] font-sans relative'
    >
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-4 rounded-full'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold '>A showcase of the projects I have worked on, heighlighting my skills and experience in various technologies</p>
      </div>
      {/* project grid */}
      <div className=' grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (

          <div className='border border-purple-400 hover:border-purple-600 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300' key={project.id} onClick={()=>handleOpenProjectModal(project)}>
            <div className='p-4'>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-2xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.description}</p>
              <div className='mb-4'>
              {project.tags.map((tag,index)=>(<span key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 mr-2 mb-2' >{tag}</span>))}
              
              </div>
            </div>
          </div>
))}
      
      </div>
      {/* Modal conatainer */}
      
      {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
    onClick={handleCloseModal}
  >
    <div
      className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto border border-purple-500/30"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <div className="sticky top-0 z-20 flex justify-end p-4 bg-gray-900 border-b border-gray-800">
        <button
          onClick={handleCloseModal}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-purple-600 transition duration-300"
        >
          &times;
        </button>
      </div>

      {/* Modal Content */}
      <div className="p-6 md:p-8">

        {/* Project Image */}
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
        />

        {/* Title */}
        <h3 className="text-3xl font-bold text-white mt-6">
          {selectedProject.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mt-4 leading-7">
          {selectedProject.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-6">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl text-center font-semibold transition duration-300"
          >
            View Code
          </a>

          <a
            href={selectedProject.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-center font-semibold transition duration-300"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  </div>
)}
    </section>
  )
}

export default Work