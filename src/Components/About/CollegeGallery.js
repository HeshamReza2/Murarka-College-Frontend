import React from 'react'
import './CollegeGallery.css'
import AboutBanner from './AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function CollegeGallery() {
  return (
    <>
        <AboutBanner name='College Gallery' />

        <Container>
            <Row>
                <Col sm='12' className='map-head'>
                    <h4>College Gallery</h4>
                </Col>

                <Col sm='12' className='map-head'>
                    <h4>UNDER CONSTRUCTION</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CollegeGallery