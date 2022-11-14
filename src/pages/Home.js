import React from 'react'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Process from '../component/Process'
import About from '../component/About'
import Portfolio from '../component/Portfolio'
import Skills from '../component/Skills'
import Blog from '../component/Blog'
import Service from '../component/Service'
import Contact from '../component/Contact'


const Home = () => {
  return (
    <>
        <Header/>
        <Banner
            title="Hello, I'm"
            name="James Smith"
            description="I'm creative designer based in New York, and I'm very passionate and dedicated to my work."
        />
        <Process/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Blog/>
        <Service/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home