import React from 'react'
import './Container.scss'  
import Slider1 from '../Slider/Slider1';
import Slider2 from '../Slider/Slider2.tsx';
import Footer from '../Footer/Footer';
function Container() {
  return (
    <div className='container'>
        <Slider1/>
        <Slider2
        category="Latest &amp; Trending"
        children = "SUBSCRIBE"
        onClick={() => alert("You clicked on Latest &amp; Trending")}
        />

        <Slider2
        category="New on Disney+"
        children = "SUBSCRIBE"
        onClick={() => alert("You clicked on Subcribe!")}
        />
<footer>
    <Footer></Footer>
</footer>
    </div>
    
  )
}

export default Container