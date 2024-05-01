import React from 'react'
import AboutBanner from './AboutBanner'

import './CampusMap.css'
import { Col, Container, Row } from 'react-bootstrap'

function CampusMap() {
  return (
    <>
        <AboutBanner name='Campus Map & Layout' />

        <Container>
            <Row>
                <Col sm='12' className='map-head'>
                    <h4>Campus Map & Layout</h4>
                </Col>

                <Col sm='12' className='map-head'>
                    <h4>UNDER CONSTRUCTION</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CampusMap