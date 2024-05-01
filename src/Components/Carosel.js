import React from 'react'
import { Carousel } from 'react-bootstrap'

import './Carosel.css'

function Carosel() {
  return (
    <>
        <Carousel data-bs-theme='dark' pause='hover' className='carosel'>
            <Carousel.Item>
                <img className='d-block w-100' src='../images/slide1.jpg' alt='First Slide' />
            </Carousel.Item>
            
            <Carousel.Item>
                <img className='d-block w-100' src='../images/slide2.jpg' alt='Second Slide' />
            </Carousel.Item>
            
            <Carousel.Item>
                <img className='d-block w-100' src='../images/slide3.jpg' alt='Third Slide' />
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Carosel