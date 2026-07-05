import React from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import {FaGithub,FaLinkedinIn} from "react-icons/fa"
import { useState } from 'react'
import { useEffect } from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
 const handleMenuItemClick = (sectionId) => {
  setActiveSection(sectionId)
  setIsOpen(false)

  // Scroll to section smoothly
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

  // check scroll and change navbar 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])
  const menuItem = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
  ]
  return (
    <nav className={`fixed top-0 z-50 w-full transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] 
${isScrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"} border-b border-white/10`}
>
      <div className='text-white flex py-5 justify-between items-center'>
        {/* name logo */}
        <div className='text-lg font-semibold cursor-pointer'><span className='text-[#8245ec]'>&lt;</span>
        <span className='text-[#fff]'>Swati</span>
        <span className='text-[#8245ec]'>/</span>
        <span className='text-[#fff]'>Singh</span>
          <span className='text-[#8245ec]'>&gt;</span></div>
        {/* Desktop */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>{
          menuItem.map((el) => (<li key={el.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection == el.id ? "text-[#8245ec]" : ""}`}>
          <button onClick={()=>(handleMenuItemClick(el.id))}>{el.label}</button>
          </li>))
        }</ul>
        {/* social media icons  */}
        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/Swati-ui-ux"
            target='_blank'
            rel='sharpener tech'
            className='text-gray-300 hover:text-[#8245ec]'
          >
          <FaGithub size={24}/>
          </a>
          <a href="https://www.linkedin.com/in/swati-singh-9822a13a1/"
            target='_blank'
            rel='sharpener tech'
            className='text-gray-300 hover:text-[#8245ec]'
          >
          <FaLinkedinIn size={24}/>
          </a>
        
        </div>
        {/* Mobile Menu Icons */}
        <div className='md:hidden'>{
        isOpen?<FiX className='text-3xl text-[#8245e2] cursor-pointer'onClick={()=>setIsOpen(false)} />:<FiMenu className='text-3xl text-[#8245e2] cursor-pointer'onClick={()=>setIsOpen(true)} />
        
        }</div>
        {/* Mobile Items */}
        {isOpen && <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-2xl z-50 rounded-lg shadow-lg">
        <ul className='flex flex-col items-center py-4 space-y-4 text-gray-300'>
            {menuItem.map((item,index) => (<li key={index} className={`
 hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
            <button className='cursor-pointer ' onClick={()=>handleMenuItemClick(item.id)}>{item.label}</button>
            
            </li>))}
            <div className='flex space-x-4'>
             <a href="https://github.com/SwatiGi/Authentication"
            target='_blank'
            rel='sharpener tech'
            className='text-gray-300 hover:text-[#fff]'
          >
          <FaGithub size={24}/>
          </a>
          <a href="https://www.linkedin.com/in/swati-singh-9822a13a1/"
            target='_blank'
            rel='sharpener tech'
            className='text-gray-300 hover:text-[#fff]'
          >
          <FaLinkedinIn size={24}/>
          </a>
            </div>
          </ul>
        </div>}
      </div>
    
    </nav>
  )
}

export default Navbar