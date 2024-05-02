import React from 'react'
import './MaintenancePolicy.css'
import AboutBanner from '../AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function MaintenancePolicy() {
  return (
    <>
        <AboutBanner name='Maintenance Policy' />

        <Container>
            <Row>
                <Col sm='12' className='map-head'>
                    <h4>Maintenance Policy</h4>
                </Col>

                <Col sm='12' className='map-head'>
                    <h4>UNDER CONSTRUCTION</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MaintenancePolicy