import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './AboutBanner.css'

function AboutBanner(props) {
  return (
    <>
        <Container fluid>
            <Row>
                <Col className='about-banner p-0'>
                    <img src='../images/banner.jpeg' alt='About History Banner' />
                    <h6 className='about-banner-text'>{props.name}</h6>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AboutBanner