import React from 'react'
import './StrategicPlan.css'
import { Col, Container, Row } from 'react-bootstrap'
import AboutBanner from './AboutBanner'

function StrategicPlan() {
  return (
    <>
        <AboutBanner name='Strategic/Prospective Plan' />

        <Container>
            <Row>
                <Col sm='12' className='strat-head'>
                    <h4>Strategic/Prospective Plan</h4>
                </Col>
            </Row>

            <Row className='strategy-row'>
                <Col sm='4' className='strategy-box equal-height-column'>
                    <img src='../images/inter-tie-ups.jpg' alt='International Tie-Ups & Collaborations' />
                    <Col className='strategy-text-box'>
                        <h6 className='strategy-box-head'>International Tie-Ups & Collaborations</h6>
                        <p className='strategy-box-text'>Murarka College always strives to provide its students a cutting edge in education not only at state and national level but at international level too. Murarka College has plans for both academic and technical collaboration with the International Universities for mutual exchange programs.</p>
                    </Col>
                </Col>
                
                <Col sm='4' className='strategy-box equal-height-column'>
                    <img src='../images/moral-values.jpg' alt='Moral Values & Social Contributions' />
                    <Col className='strategy-text-box'>
                        <h6 className='strategy-box-head'>Moral Values & Social Contributions</h6>
                        <p className='strategy-box-text'>Murarka College's main aim is not only to impart knowledge to students in their skill sets; but also to inculcate in each one of them the love for mankind. Murarka College strongly believes that it is an integral part of the society and that its growth and development is based on and is directly proportional to the growth and development of the society.</p>
                    </Col>
                </Col>
                
                <Col sm='4' className='strategy-box equal-height-column'>
                    <img src='../images/library-facility.png' alt='Enhancing Library Facility' />
                    <Col className='strategy-text-box'>
                        <h6 className='strategy-box-head'>Enhancing Library Facility</h6>
                        <p className='strategy-box-text'>The college will add more e-journal and will order new books for library.</p>
                    </Col>
                </Col>
                
                <Col sm='4' className='strategy-box equal-height-column'>
                    <img src='../images/sports-facility.jpg' alt='Enhancing Sports Facilities' />
                    <Col className='strategy-text-box'>
                        <h6 className='strategy-box-head'>Enhancing Sports Facilities</h6>
                        <p className='strategy-box-text'>The college will buy new equipments for sports facilities and will encourage each and every students in sports.</p>
                    </Col>
                </Col>
                
                <Col sm='4' className='strategy-box equal-height-column'>
                    <img src='../images/ict-facility.jpg' alt='To Expand The I.C.T. Facility To The Students' />
                    <Col className='strategy-text-box'>
                        <h6 className='strategy-box-head'>To Expand The I.C.T. Facility To The Students</h6>
                        <p className='strategy-box-text'>The college will equipped with I.C.T facilities in different laboratories namely Physics, Chemistry, Biology, and Educational Technology for use of students.</p>
                    </Col>
                </Col>
                
                <Col sm='4' className='strategy-box equal-height-column'>
                    <img src='../images/canteen.jpg' alt='College Canteen' />
                    <Col className='strategy-text-box'>
                        <h6 className='strategy-box-head'>College Canteen</h6>
                        <p className='strategy-box-text'>The college will take actions to make the cateen beautiful and hygenic for the students and avilable food at an affordable price.</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default StrategicPlan