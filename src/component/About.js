import React from 'react'
import Button from './Button'
import CommonHeading from './CommonHeading'
import CountUp from 'react-countup';
// import CountUp, { useCountUp } from "react-countup";

const About = () => {
  
  return (
    <section className=' py-7 md:py-90 relative'>
      <div className='absolute left-0 top-0 hidden md:block '>
        <img className='max-w-full h-auto z-10' src="./images/about-top.png" alt="victor" />
      </div>
      <div className='absolute right-0 bottom-0 hidden md:block '>
        <img className='max-w-full h-auto z-10' src="./images/about-bottom.png" alt="victor" />
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
        <div className='relative'>
          <div>
            <img className='max-w-[90%] h-auto' src="./images/about.jpg" alt="about" />
          </div>
          <div className='py-7 px-6 rounded-md bg-gray-600 flex gap-3 items-center md:w-44 md:absolute top-36 -left-14 z-10 my-5 md:my-0'>
            <span className='text-[#1cbe59] text-5xl font-jost font-medium w-14 '>
            <CountUp end={18} enableScrollSpy  />
            </span>
            <span className='text-white text-[18px] font-jost font-medium ' >Years of Success</span>
          </div>
          <div className='py-7 px-6 rounded-md bg-gray-600 flex gap-3 items-center md:w-48 md:absolute bottom-24 -right-7 z-10'>
            <span className='text-[#f0c45c] text-5xl font-jost font-medium '>
              <span>
                <CountUp end={9} enableScrollSpy />
              </span>
              K
            </span>
            <span className='text-white text-[18px] font-jost font-medium ' >Total Projects</span>
          </div>
        </div>

        <div className='md:pl-14 text-center md:text-left'>
          <CommonHeading h3="I'm a Designer" h2="I Can Design Anything You Want" p="Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration." />
          <div className='pt-6'>
            <Button text="Hire me" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About