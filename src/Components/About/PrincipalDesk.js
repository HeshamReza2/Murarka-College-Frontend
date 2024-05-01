import React from 'react'

import './PrincipalDesk.css'
import AboutBanner from './AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function PrincipalDesk() {
  return (
    <>
        <AboutBanner name='Principal Desk' />

        <Container fluid className='desk-main'>
            <Container>
                <Row>
                    <Col sm='12' className='desk-head'>
                        <h5>From The Desk of Principal</h5>
                    </Col>

                    <Col sm='6' className='desk-img'>
                        <img src='../images/principal.jpg' alt='Prinicipal Image' />
                    </Col>

                    <Col sm='6' className='desk-para'>
                        <p id='first-para'>Welcome to Murarka College, Sultanganj Bhagalpur, a milestone of academic excellence and co-curricular and extracurricular performances which has enlarged and enriched in Bihar. Murarka College, Sultanganj was established on 23rd February 1955 under Bhagalpur university.</p>

                        <p>We belive that the purpose of educations is to turn mirrors into windows, and as such are focused not only on pure studies but also on providing opportunity to each student to explore his or her own capabilities and their area of interest. we aim to develop soft skills that will equip them to manage and lead the valid opportunities and challenges of the society with and added edge.</p>
                        
                        <p>We care for mind, we care for person, the accent is on allround development of personality. I wish you the best in process of seeking to became a part of murarka college family.</p>
                        
                        <p>Murarka College family was dedicated, is dedicated and will be dedicated to establish.</p>
                        
                        <p><b>All for Knowledge, Knowledge for All.</b></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
  )
}

export default PrincipalDesk