import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-transparent py-4 absolute top-0 left-2/4 -translate-x-2/4 w-full '>
        <div className="container">
            <div className="grid grid-cols-[auto_1fr] items-center justify-items-stretch">
                <div className="logo w-40">
                    <img className='max-w-full' src="./images/dark-logo.png" alt="Dark-logo" />
                </div>
                <div className="menu">
                    <ul className='flex items-center justify-end gap-4'>
                        <li>
                            <Link className='text-primary text-base font-jost font-medium hover:text-primary transition-all ' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-white text-base font-jost font-medium hover:text-primary transition-all ' to="/">About</Link>
                        </li>
                        <li>
                            <Link className='text-white text-base font-jost font-medium hover:text-primary transition-all ' to="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link className='text-white text-base font-jost font-medium hover:text-primary transition-all ' to="/">Service</Link>
                        </li>
                        <li>
                            <Link className='text-white text-base font-jost font-medium hover:text-primary transition-all ' to="/">Blog</Link>
                        </li>
                        <li>
                            <Link className='text-white text-base font-jost font-medium hover:text-primary transition-all ' to="/">Contact</Link>
                        </li>
                        <li>
                        <button className='relative z-10 text-white text-lg font-jost font-normal rounded-full bg-transparent border border-primary py-2 px-7 overflow-hidden after:w-full after:h-full after:content-[""] after:absolute after:bg-primary after:bottom-0 after:left-2/4 after:-translate-x-2/4 after:transition-all after:-z-10 after:scale-110 hover:after:h-0'>Download CV</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header