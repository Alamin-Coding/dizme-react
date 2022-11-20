import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='relative z-10 text-white text-lg font-jost font-normal rounded-full bg-transparent border border-primary py-1 sm:py-3 px-4 sm:px-9 overflow-hidden after:w-full after:h-full after:content-[""] after:absolute after:bg-primary after:bottom-0 after:left-2/4 after:-translate-x-2/4 after:transition-all after:-z-10 after:scale-110 hover:after:h-0'>{props.text}</button>
    </>
  )
}

export default Button