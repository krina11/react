import React from 'react'
import './Container.scss'  
import Slider1 from '../Slider/Slider1';
import Slider2 from '../Slider/Slider2.tsx';
import Footer from '../Footer/Footer';


const data = require('.././../data/dummy_data.json');


function Container() {
 
  return (
    <div className='container'>
      <Slider1/>
    {data.otherSlider.map(item=>{
      console.log(item);
      return( <Slider2
        category={item["category"]}
        data = {item["dataList"]}
        onClick={() => alert("You clicked on "+ item["category"]+"")}
        />)
     

    })},
    
    <footer>
    <Footer></Footer>
    </footer>
    </div>
    
  )
}

export default Container