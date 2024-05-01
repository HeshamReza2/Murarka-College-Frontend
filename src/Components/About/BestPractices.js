import React from 'react'
import './BestPractices.css'
import AboutBanner from './AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function BestPractices() {
  return (
    <>
        <AboutBanner name='Best Practices' />

        <Container>
            <Row>
                <Col sm='12' className='map-head'>
                    <h4>Best Practices</h4>
                </Col>

                <Col sm='12' className='map-head'>
                    <h4>UNDER CONSTRUCTION</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default BestPractices