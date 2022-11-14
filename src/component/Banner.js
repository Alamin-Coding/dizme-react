import React from 'react'
import { FaFacebookF,FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  return (
    <section className='bg-banner bg-no-repeat bg-center bg-cover pt-36 pb-10'>
      <div className="md:container">
        <div className="grid grid-cols-2 items-center gap-6">
          <div className="banner_info ">
            <div>
              <h3 className='text-2xl text-primary font-jost font-normal '>{props.title}</h3>
              <h2 className='text-white text-6xl font-jost font-normal'>{props.name}</h2>
              <h1 className='text-white text-xl font-open font-light py-5'>A <span className='text-green-400'>Creative Designer</span> From <span className='text-yellow-300'>New York</span> </h1>
              <p className=' text-white text-base font-open font-light leading-6 pb-5 '>{props.description}</p>
            </div>
            <div className='flex items-center gap-6'>
              <button className='relative z-10 text-white text-lg font-jost font-medium rounded-full bg-transparent border border-primary py-3 px-9 overflow-hidden after:w-full after:h-0 after:content-[""] after:absolute after:bg-primary after:bottom-0 after:left-2/4 after:-translate-x-2/4 after:transition-all after:-z-10 hover:after:h-full '>About me</button>
              <Link to="#" className='text-white text-lg'>
                <FaFacebookF/>
              </Link>
              <Link to="#" className='text-white text-lg'>
              <AiOutlineTwitter/>
              </Link>
              <Link to="#" className='text-white text-lg'>
                <FaLinkedinIn/>
              </Link>
              <Link to="#" className='text-white text-lg'>
                <FaBehance/>
              </Link>
            </div>
          </div>
          <div className="banner_image ">
            <div className='w-2/3 ml-auto relative'>
              <img className='max-h-96' src="./images/banner-avatar.png" alt="banner-avatar" /> 
              <span className='animate-bounce absolute top-4 -left-5'><img src="./images/illustrator.png" alt="" /></span>
              <span className='animate-bounce absolute top-28 right-0'><img src="./images/photoshop.png" alt="" /></span>
              <span className='animate-bounce absolute -bottom-10 left-1/3'><img src="./images/figma.png" alt="" /></span>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-6'>
          <span className='after:animate-bounce ease-linear w-6 h-9 rounded-full border-white border relative after:absolute after:top-3 after:left-2/4 after:-translate-x-2/4 after:w-[1px] after:h-2 after:content-[""] after:bg-white '>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Banner