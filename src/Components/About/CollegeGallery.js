import React from 'react'
import './CollegeGallery.css'
import AboutBanner from './AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function CollegeGallery() {
    const imageList = [ 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
  return (
    <>
        <AboutBanner name='College Gallery' />

        <Container>
            <Row>
                {imageList && imageList.map((item, index) => {
                    return(
                        <Col sm='4' className='gallery-img' key={index}>
                            <img src={`../images/gallery/${item}.jpeg`} alt={item} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </>
  )
}

export default CollegeGallery