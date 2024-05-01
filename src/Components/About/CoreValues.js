import React from 'react'
import './CoreValues.css'
import AboutBanner from './AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function CoreValues() {
  return (
    <>
        <AboutBanner name='Core Values' />

        <Container>
            <Row>
                <Col sm='12' className='map-head'>
                    <h4>Core Values</h4>
                </Col>

                <Col sm='12' className='map-head'>
                    <h4>UNDER CONSTRUCTION</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CoreValues