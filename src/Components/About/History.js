import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutBanner from './AboutBanner'

import './History.css'

function History() {
  return (
    <>
      <AboutBanner name='History Of The College' />
      
      <Container fluid className='main'>
        <Container className='main-container'>
          <Row>
            <Col sm='12' className='college-header'>
              <h2>History Of Murarka College</h2>
            </Col>

            <Col sm='12' className='college-image'>
              <img src='../images/banner1.jpg' alt='College Image' />
            </Col>

            <Col sm='12' className='college-text'>
              <p id='first-para'>
                Murarka college, Sultanganj situated on the bank of the river Ganges, is contributing higher education to the society being on the coast of Janhvi river.
              </p>

              <p>
                Murarka college was founded by first chief minister of Bihar “Bihar keshari” late Dr. Sri Krishna singh. 23rd feb 1955 Murarka college was established by Murarka family for the first time in Bihar, where Murarka family had setup a saraswati temple for the college and decided to spread higher education in Bihar. During the initial areas of the college, it had only Intermediate course, In 1956 B.A courses was added. This became one of the most important degree college of Bihar university. In 12th july 1960 bhagalpur university was established(currently under T.M.B University) Chancellor and vice chancellor T.M.B University had contributed for the development of the institution, with the help and advice of professors the UGC had granted the right for holding national seminar.
              </p>

              <p>
                For the first time in 2014-15, the college had organised the inter college cricket & Football tournament, our college students had also participated in inter university athletic competition.
              </p>

              <p>
                In 1975 the college stepped in its 20th year and on that very year Murarka college was selected as the top 10 colleges of Bihar by the government and university of Bihar. on 23rd feb 1976 Murarka college was accepted as a constituent unit duly, from that time students of Murarka college are establishing in their individual fields and in other educational sectors nationally and internationally. In 1980 Murarka college celebrated its silver jubilee with mukarka family. Bharat Ratna Mother Teresa and Saint Karpatriji Maharaj honoured the college by visiting the college and gave their blessings in the same year.
              </p>

              <p>
                In 2005 Murarka college celebrated its golden jubilee and stepped into its golden 51st on 2006. With the immense help and support of numerous professors, politicians and saints the college had grown up and has 2 buildings of its own that provided quality education. Students from surrounding rural areas like mirhatti, dudhela, ashiachak, nonser, gangania, kalianpur, bariyarpur, asarganj, udhyadih, masoomganj, sambooganj have already established in their respective fields and also have been influenced by NCC (National Codet Corp) and NSS(National Service Scheme).
              </p>

              <p>
                The college is now constantly upgrading itself under prof.(Dr.) Amar Kant Singh ,the principal. We hope to serve Bihar and also pray for the wellbeing of the students.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default History