import React from 'react'
import img1 from "../../DAY11-02/Assets/img1.png"
import img2 from "../../DAY11-02/Assets/img2.png"
import img3 from "../../DAY11-02/Assets/img3.png"
import Carousel from "react-bootstrap/Carousel"
const Carousel1 = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img src={img1} alt="" className='w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="" className='w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} alt="" className='w-100'/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Carousel1