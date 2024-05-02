import React from 'react'
import './HumanValues.css'
import { Col, Container, Row } from 'react-bootstrap'
import AboutBanner from '../AboutBanner'

function HumanValues() {
  return (
        <>
            <AboutBanner name='Human Values And Professional Ethics' />

            <Container>
                <Row>
                    <Col sm='12' className='map-head'>
                        <h4>Human Values And Professional Ethics</h4>
                    </Col>

                    <Col sm='12' className='map-head'>
                        <h4>UNDER CONSTRUCTION</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HumanValues