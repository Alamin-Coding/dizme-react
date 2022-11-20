import React from 'react'

const CommonHeading = (props) => {
  return (
    <div className='max-w-[550px] m-auto'>
        <h3 className='text-primary text-xl md:text-2xl pb-2 font-jost font-medium'>{props.h3}</h3>
        <h2 className='text-white text-3xl md:text-[40px] pb-4 font-jost font-bold'>{props.h2}</h2>
        <p className='text-para text-base font-open font-normal leading-7'>{props.p}</p>
    </div>
  )
}

export default CommonHeading