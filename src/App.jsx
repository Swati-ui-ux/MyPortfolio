import React from 'react'
import Navbar from './comonents/Navbar/Navbar'
import About from './comonents/About/About'
import Skills from './comonents/Skills/Skills'
import Work from './comonents/Work/Work'
import Education from './comonents/Education/Education'
import Contect from './comonents/Contect/Contect'
import Footer from './comonents/Footer/Footer'
import BlurBlob from './BlurBlob'

const App = () => {
  return (
    <div className='bg-[#1b1032]'>
      
      <BlurBlob position={{top:"35%",left:"20%"}} size={{width:"30%",height:"40%"}}></BlurBlob>
      
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'>
        
      </div>
      <div className='relative pt-20 '>
        <Navbar />
        <About />
        <Skills />
        {/* <Experience/> */}
        <Work />
        <Education />
        <Contect />
        <Footer/>
      </div>
    
    </div>
  )
}

export default App
