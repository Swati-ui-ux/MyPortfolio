import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaLinkedin} from "react-icons/fa"
const Footer = () => {
const  handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
}
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Swati singh</h2>
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: 'about' },
            { name: "Skills", id: 'skills' },
            { name: "Project", id: 'project' },
            {name:"Education",id:'education'},
          ].map((item, index) => (
            <button
            key={index}
            onClick={()=>handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}  
        </nav>
        {/* Social Media */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/feed/?trk=onboarding-landing" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/coder2265/" },
            {icon:<FaYoutube/>,link:"https://www.youtube.com/@SwatiGola-v4f6q"},
          ].map((item, index) => (<a
            key={index}
            target='_blank'
            href={item.link}
            className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
          >
            {item.icon}
          </a>))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer