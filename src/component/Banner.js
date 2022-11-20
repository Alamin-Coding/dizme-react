import React from 'react'
import { FaFacebookF,FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from './Button';

const Banner = (props) => {
  return (
    <section className='bg-banner bg-no-repeat bg-center bg-cover pt-24 sm:pt-32 md:pt-36 pb-8 md:pb-10'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div className="banner_info row-start-2 sm:row-auto text-center sm:text-left">
            <div>
              <h3 className='text-2xl text-primary font-jost font-normal '>{props.title}</h3>
              <h2 className='text-white text-5xl sm:text-6xl font-jost font-normal'>{props.name}</h2>
              <h1 className='text-white text-lg sm:text-xl font-open font-light sm:py-5 py-2'>A <span className='text-green-400'>Creative Designer</span> From <span className='text-yellow-300'>New York</span> </h1>
              <p className=' text-white sm:text-base text-sm font-open font-light leading-6 pb-4 sm:pb-5 '>{props.description}</p>
            </div>
            <div className='flex items-center gap-6'>
              <Button text="About me" />
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
          <div className="banner_image row-start-1 sm:row-auto">
            <div className='w-2/3 m-auto sm:ml-auto relative'>
              <img className='max-h-96' src="./images/banner-avatar.png" alt="banner-avatar" /> 
              <span className='hidden sm:block animate-bounce absolute top-4 -left-5'><img src="./images/illustrator.png" alt="" /></span>
              <span className='hidden sm:block animate-bounce absolute top-28 right-0'><img src="./images/photoshop.png" alt="" /></span>
              <span className='hidden sm:block animate-bounce absolute -bottom-10 left-1/3'><img src="./images/figma.png" alt="" /></span>
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