import React from 'react'
import './Portfolio.css'
import CommonHeading from './CommonHeading'
import mixitup from 'mixitup';


const Portfolio = () => {
  return (
    
    <section className='py-7 md:py-90 portfolio'>
      <div className="container">
        <div className='text-center'>
          <CommonHeading h3='Portfolio' h2='My Amazing Works' p='Most common methods for designing websites that work well on desktop is responsive and adaptive design' />
        </div>
        <div className='pt-20 pb-14'>
          <ul className='flex gap-5 items-center justify-center'>
            <li className='text-base text-white hover:text-primary font-jost font-medium transition-all cursor-pointer' type="button" data-filter="all">All</li>
            <li className='text-base text-white hover:text-primary font-jost font-medium transition-all cursor-pointer' type="button" data-filter=".y">Youtube</li>
            <li className='text-base text-white hover:text-primary font-jost font-medium transition-all cursor-pointer' type="button" data-filter=".v">Vimeo</li>
            <li className='text-base text-white hover:text-primary font-jost font-medium transition-all cursor-pointer' type="button" data-filter=".s">Soundcloud</li>
            <li className='text-base text-white hover:text-primary font-jost font-medium transition-all cursor-pointer' type="button" data-filter=".p">Popup</li>
            <li className='text-base text-white hover:text-primary font-jost font-medium transition-all cursor-pointer' type="button" data-filter=".d">Detail</li>   
          </ul>
        </div>
        <div className='image_gallery mixinme' >
          {/* <div className="grid-item flowers"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1362379/flowers.jpg"/>1</div>
          <div class="grid-item others"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1362379/redMillB%26W.jpg"/>2</div>
          <div className="grid-item flowers"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1362379/flowers.jpg"/>3</div>
          <div class="grid-item newYork"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1362379/nycBuilding2.jpg"/>4</div>
          <div className="grid-item flowers"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1362379/flowers.jpg"/>5</div>
          <div className="grid-item flowers"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1362379/flowers.jpg"/>6</div> */}
          <div className='grid-item mix y'>1</div>
          <div className='grid-item mix y'>2</div>
          <div className='grid-item mix d'>3</div>
          <div className='grid-item mix p'>4</div>
          <div className='grid-item mix v d'>5</div>
          <div className='grid-item mix y'>6</div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio