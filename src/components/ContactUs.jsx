import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LuLibrary } from 'react-icons/lu'
const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }
const ContactUs = () => {
  return (
    <footer className='bg-gray-50' id="contactus">
         <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8'>   
                {/* brand column */}
                <div className='lg:col-span-4'>
                    <div className='flex items-center gap-1 mb-4'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                                <div className='w-4 h-4 bg-red-600 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
                                <span className='text-xl font-medium ml-1'>The Suday Bite</span>
                            </div>
                    </div>
                    <p className='text-gray mb-6'>We have been serving irresistible 
                        comfort food since 1999. Our mission is to keep you smiling with every bite. </p>
                    <div  className='flex items-center gap-4'>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center
                         justify-center text-gray hover:bg-red-800 hover:text-white transition-all duration-200 '><FaFacebookF className='size-5'/></a>
                          <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center
                         justify-center text-gray hover:bg-red-800 hover:text-white transition-all duration-200 '><FaTwitter  className='size-5'/></a>
                          <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center
                         justify-center text-gray hover:bg-red-800 hover:text-white transition-all duration-200 '><FaInstagram  className='size-5'/></a>
                    </div>
                </div>
                {/* footer nav items */}
                <div className='lg:col-span-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {
                            Object.entries(footerLinks).map(([category,links],categoryIndex) => (
                                <div>
                                    <h3 key={category} className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                                    <ul>
                                        {links.map((link, index) =>(
                                            <li key={index}>
                                                <a href="#" className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                            </li>
                                        ) )}
                                    </ul>
                                </div>
            
                            ))
                        }
                    </div>
                </div>
                   
             </div>
         </div>
    </footer>
  )
}

export default ContactUs