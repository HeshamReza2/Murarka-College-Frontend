import React from 'react'
import AboutBanner from '../AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

import './VisionMissionValue.css'

function VisionMissionValue() {
  return (
    <>
        <AboutBanner name='Vision, Mission, Value' />

        <Container>
            <Row className='equal-height-row'>
                <Col sm='4' className='vis-box equal-height-column'>
                    <img src='../images/vision.png' alt='Vision' />
                    <p>Late Seth Ranglal Murarka donated the sprawling campus to facilitate the higher eduction of rural girls and boys of Sultanganj, belong to the financially backward class. To be the premier source for education workforce training and economic development.
                    <br />
                    To reach the stage of attainment where the college cn humbly boast of its salient contribution forward towards the social and economical changes in the locality by providing oppurtunities for higher education along with NCC and NSS training.</p>
                </Col>
                
                <Col sm='4' className='vis-box equal-height-column'>
                    <img src='../images/mis-val-vis.png' alt='Vision, Mission, Value' className='vmv' />
                </Col>
                
                <Col sm='4' className='vis-box equal-height-column'>
                    <img src='../images/mission.png' alt='Mission' />
                    <p>The college endeavors to inculcate appropriate values in student through knowledge discipline and service. The institution tries to ensured through effective transaction to deliver the UnderGraduate Curricula framed by the Tilka Manjhi Bhagalpur University. Its mission is to make aware the students of social cultural economic and environmental realities at the local National and University Levels and thereby contributing towards the creating and maintaining a progressive and enlightened ambience.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default VisionMissionValue