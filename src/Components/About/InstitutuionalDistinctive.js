import React from 'react'
import './InstitutuionalDistinctive.css'
import AboutBanner from './AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function InstitutuionalDistinctive() {
  return (
    <>
        <AboutBanner name='Institutional Distinctive' />

        <Container>
            <Row>
                <Col sm='12' className='map-head'>
                    <h4>Institutional Distinctive</h4>
                </Col>

                <Col sm='12' className='map-head'>
                    <h4>UNDER CONSTRUCTION</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default InstitutuionalDistinctive