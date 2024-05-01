import React from 'react'
import { Col } from 'react-bootstrap'
import './MultiCarosel.css'


function MultiCarosel() {
    const sliderImageUrl = [
        {
            url: '../images/study-material.png',
            name: 'Study Material'
        },
        {
            url: '../images/covid-19-pandemic.png',
            name: 'Covid 19 Pandemic'
        },
        {
            url: '../images/notice-board.png',
            name: 'Notice Board'
        },
        {
            url: '../images/iqac.png',
            name: 'IQAC'
        },
        {
            url: '../images/library-search.png',
            name: 'Library Search'
        },
        {
            url: '../images/iso.png',
            name: 'ISO'
        },
        {
            url: '../images/feedback.png',
            name: 'Online Feedback'
        },
        {
            url: '../images/institute-login.png',
            name: 'Institute Login'
        },
        {
            url: '../images/prev-questions.png',
            name: 'Prev. Questions'
        },
        {
            url: '../images/sem-fees.png',
            name: 'Semester Fees'
        }
    ]

    
  return (
    <>
        {sliderImageUrl.map((imageUrl, index) => {
            return(
                <Col sm='1' className='slides' key={index}>
                    <img src={imageUrl.url} alt={imageUrl.name} className='slide-image' />
                    <p className='slide-name'>{imageUrl.name}</p>
                </Col>
            )
        })}
    </>
  )
}

export default MultiCarosel