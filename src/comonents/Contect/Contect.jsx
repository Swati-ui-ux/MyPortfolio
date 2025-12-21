import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'
const Contect = () => {
  const form = useRef();
  
  const [isSent,setIsSent] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      
      "service_iqu8dy7",// service id
   
      "template_ko47mv1",   // template id
      form.current,
      "CHEZ-HK_3kSQgi4cA" //public key
    ).then(
      () => {
      setIsSent(true)
      form.current.reset(); //resec
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme:"dark",
        })
      }, (error) => {
        toast.error("Error Message ", error);
        toast.error("Failed to send Message.Please try Again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme:"dark",
        })
      }
    )
  
  }
  return (
    <section id='' className=' flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] '>
    <ToastContainer/>
     <div className='text-center mb-16 max-w-3xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Contect</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-4 rounded-full'></div>
        <p className='text-gray-300 text-base sm:text-lg'>
        I'd love to hear from you-reach out for any opportunities or question!
        </p>
      </div>
      {/* contect form */}
      
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg border border-gray-700'>
      
        <h3 className='text-xl font-semibold text-white text-center'>Connect With Me</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='mt-4 flex flex-col space-y-4'>
           <input type="text" name="user-name" placeholder='Your Name' required
className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input type="email" name="user-email" placeholder='Your Email' required
className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
           <input type="text" name="subject" placeholder='Subject' required
className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <textarea name="message" placeholder='Message' rows='4'
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'></textarea>
          {/* send button */}
<button type='submit' className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white rounded-md hover:opacity-90 transition'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contect

// service_iqu8dy7