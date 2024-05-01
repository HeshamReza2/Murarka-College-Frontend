import React, { useEffect, useState } from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import Carosel from './Carosel'
import MultiCarosel from './MultiCarosel'

function Home() {
  const [ notice, setNotice ] = useState('active-pop')
  const [ tender, setTender ] = useState('')
  const [ faculty, setFaculty ] = useState('')

  const [ noticeData, setNoticeData ] = useState([{name: 1, date: '26/04/2024'}, {name: 2, date: '26/04/2024'}, {name: 3, date: '26/04/2024'}, {name: 4, date: '26/04/2024'}, {name: 5, date: '26/04/2024'}, {name: 6, date: '26/04/2024'}, {name: 7, date: '26/04/2024'}, {name: 8, date: '26/04/2024'}, {name: 9, date: '26/04/2024'}, {name: 10, date: '26/04/2024'}])
  const [ tenderData, setTenderData ] = useState([{name: 'A', date: '26/04/2024'}, {name: 'B', date: '26/04/2024'}, {name: 'C', date: '26/04/2024'}, {name: 'D', date: '26/04/2024'}, {name: 'E', date: '26/04/2024'}, {name: 'F', date: '26/04/2024'}, {name: 'G', date: '26/04/2024'}, {name: 'H', date: '26/04/2024'}, {name: 'I', date: '26/04/2024'}, {name: 'J', date: '26/04/2024'}])
  const [ facultyData, setFacultyData ] = useState([{name: '~', date: '26/04/2024'}, {name: '!', date: '26/04/2024'}, {name: '@', date: '26/04/2024'}, {name: '#', date: '26/04/2024'}, {name: '$', date: '26/04/2024'}, {name: '%', date: '26/04/2024'}, {name: '^', date: '26/04/2024'}, {name: '&', date: '26/04/2024'}, {name: '*', date: '26/04/2024'}, {name: '?', date: '26/04/2024'}])

  const [ data, setData ] = useState([])

  useEffect(() => {
    if(notice == 'active-pop'){
      setData(noticeData)
    }
    else if(tender == 'active-pop'){
      setData(tenderData)
    }
    else if(faculty == 'active-pop'){
      setData(facultyData)
    }
  })

  return (
    <>
      <Container fluid>
        <Row className='read'>
          <Col sm='8'>
            <Carosel />
          </Col>

          <Col sm='4' className='popup'>
            <Row className='pop-btns'>
              <Col> <button className={`pop-head ${notice}`} style={{'--color': 'rgb(0, 160, 160)', '--border': '2px', '--slant': '.5em'}} onClick={() => {setNotice('active-pop'); setTender(''); setFaculty('');}}>Notice</button> </Col>
              <Col> <button className={`pop-head ${tender}`} style={{'--color': 'rgb(0, 160, 160)', '--border': '2px', '--slant': '.5em'}} onClick={() => {setNotice(''); setTender('active-pop'); setFaculty('');}}>Tender</button> </Col>
              <Col> <button className={`pop-head ${faculty}`} style={{'--color': 'rgb(0, 160, 160)', '--border': '2px', '--slant': '.5em'}} onClick={() => {setNotice(''); setTender(''); setFaculty('active-pop');}}>News</button> </Col>
            </Row>

            <Row>
              <div className='lists'>
                {data && data.map((item, index) => {
                  return(
                    <div className='notices' key={index}>
                      <p className='notices-name'>{item.name}</p>
                      <p className='notices-date'>{item.date}</p>
                    </div>
                  )
                })}
              </div>
            </Row>

            <Row>
              <div className='bottom-pop'>
                <div className='btn'><a href=''>View All</a></div>
              </div>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className='announcement'>
              <a><i class="fa fa-bullhorn"></i></a>
              <marquee className='announce'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</marquee>
            </div>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <MultiCarosel />
        </Row>

        <Row className='why'>
          <Col sm='4' className='why1 text-center'>
            <img src='../images/logo.png' alt='Murarka College' />
          </Col>
          <Col sm='8' className='why2'>
            <p id='why-murarka'>Welcome To Murarka College</p>
            <p id='why-murarka-desc'>Murarka College, Sultanganj was established in 1955 by the visionary enterprise of the local business tycoon Late Ranglal Jee Murarka. The College lies in 17.5 acre serving the rural area which encompassed a diameter of about 30 KM. The College becomes a Constituent Unit of Tilkamanjhi Bhagalpur University on 23 February 1976. The College is a multi facility unit that is, the college houses the science faculty as well as Humanities and Social Science. The institution has on roll approximately One Thousand and Nine Hundred in Bachelor stage . The College provides Sport and Recreational facilities. In the past two years the college has been runner up in football tournament and has sent many athletics to represent the university as well as the state. Thus the college endeavors to provide all round development. The College is a Constituent Unit of T. M. Bhagalpur University, Bhagalpur.</p>
            <div className='btn'><a href=''>Read More</a></div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='prince'>
        <Container>
          <Row className='principal'>
            <Col sm='12' className='princi equal-height-column justify-content-center'>
              <Row>
                <Col sm='12'>
                  <p id='why-murarka'>Principal's Message</p>
                </Col>
                <Col sm='5' className='principal-image'>
                  <img src='../images/principal.jpg' alt='Principal Image' />
                  <p>Prof.(Dr.)Amar Kant Singh<br />Principal</p>
                </Col>

                <Col sm='6' className='principal-msg'>
                  <p>Welcome to Murarka College, Sultanganj Bhagalpur , a milestone of academic excellence and co-curricular and extracurricular performances which has enlarged and enriched in Bihar. Murarka College, Sultanganj was established on 23rd February 1955 under Bhagalpur university.
                    <br />
                  We belive that the purpose of educations is to turn mirrors into windows, and as such are focused not only on pure studies but also on providing opportunity to each student to explore his or her own capabilities and their area of interest . we aim to develop soft skills that will equip them to manage and lead the valid opportunities and challenges of the society with and added edge.
                    <br />
                  We care for mind, we care for person- the accent is on allround development of personality . i wish you the best in process of seeking to became a part of murarka college family.
                    <br />
                  Murarka C ollege family was dedicated, is dedicated and will be dedicated to establish
                    <br />
                  All for Knowledge , Knowledge for All.</p>
                </Col>
              </Row>
            </Col>

            <Col sm='12' className='equal-height-column visionary justify-content-center'>
              <Row className='d-flex justify-content-center'>
                <Col className='equal-height-column visions-col' sm='3'>
                  <div className='visions'>
                    <h4>Vision</h4>
                    <p>Late Seth Ranglal Murarka donated the sprawling campus to facilitate the higher eduction of rural girls and boys of Sultanganj, belong to the financially backward class. To be the premier source for education workforce training and economic development.
                    <br />
                    To reach the stage of attainment where the college cn humbly boast of its salient contribution forward towards the social and economical changes in the locality by providing oppurtunities for higher education along with NCC and NSS training.</p>
                  </div>
                </Col>
                <Col className='equal-height-column visions-col' sm='3'>
                  <div className='visions'>
                    <h4>Mission</h4>
                    <p>The college endeavors to inculcate appropriate values in student through knowledge discipline and service. The institution tries to ensured through effective transaction to deliver the UnderGraduate Curricula framed by the Tilka Manjhi Bhagalpur University. Its mission is to make aware the students of social cultural economic and environmental realities at the local National and University Levels and thereby contributing towards the creating and maintaining a progressive and enlightened ambience.</p>
                  </div>
                </Col>
                <Col className='equal-height-column visions-col' sm='3'>
                  <div className='visions'>
                    <h4>Core values</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className='reason-murarka'>
        <Container>
          <Row className='text-center'>
            <Col sm='12' className='murar'>
              <h4>Why Murarka College ?</h4>
            </Col>
            <Col sm='4' className='equal-height-column murark'>
              <img src='../images/ncc.jpg' alt='National Cadet Corps' />
              <h6 className='murark-heading'>National Cadet Corps (NCC)</h6>
              <div className='details'>
                <p>The National Cadet Corps is the Indian military cadet corps with its Headquarters at New...</p>
                <div className='btn'><a href=''>Read More</a></div>
              </div>
            </Col>
            <Col sm='4' className='equal-height-column murark'>
              <img src='../images/ict.jpg' alt='ICT Classrooms' />
              <h6 className='murark-heading'>ICT Classrooms</h6>
              <div className='details'>
                <p>The Department of History has some of the most distinguished faculty among the...</p>
                <div className='btn'><a href=''>Read More</a></div>
              </div>
            </Col>
            <Col sm='4' className='equal-height-column murark'>
              <img src='../images/omr.jpg' alt='Competitive Exam' />
              <h6 className='murark-heading'>Competitive Exam</h6>
              <div className='details'>
                <p>The college is well equipped with different laboratories namely Physics, Chemistry...</p>
                <div className='btn'><a href=''>Read More</a></div>
              </div>
            </Col>
            <Col sm='4' className='equal-height-column murark'>
              <img src='../images/career.jpg' alt='Career Counselling' />
              <h6 className='murark-heading'>Career Counselling</h6>
              <div className='details'>
                <p>The college is well equipped with different laboratories namely Physics, Chemistry...</p>
                <div className='btn'><a href=''>Read More</a></div>
              </div>
            </Col>
            <Col sm='4' className='equal-height-column murark'>
              <img src='../images/alumni.jpg' alt='Alumni Association' />
              <h6 className='murark-heading'>Alumni Association</h6>
              <div className='details'>
                <p>The college is well equipped with different laboratories namely Physics, Chemistry...</p>
                <div className='btn'><a href=''>Read More</a></div>
              </div>
            </Col>
            <Col sm='4' className='equal-height-column murark'>
              <img src='../images/canteen.jpg' alt='College Canteen' />
              <h6 className='murark-heading'>College Canteen</h6>
              <div className='details'>
                <p>The two stored well ventilated canteen with adequate lighting facility in an open...</p>
                <div className='btn'><a href=''>Read More</a></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Container fluid>
        <Row className='text-center'>
          <Col sm='12' className='murar'>
            <h4>E-Resources</h4>
          </Col>

          <Col sm='12'>
            <Row className='btm-list'>
              <Col sm='2' className='resources equal-height-column'>
                <div className='btm-box'>
                  <img src='../images/ipad.jpg' alt='College Library' />
                  <p>College Library</p>
                </div>
              </Col>
              
              <Col sm='2' className='resources equal-height-column'>
                <div className='btm-box'>
                  <img src='../images/infli.png' alt='Inflibnet' />
                  <p>Inflibnet</p>
                </div>
              </Col>
              
              <Col sm='2' className='resources equal-height-column'>
                <div className='btm-box'>
                  <img src='../images/comp-lab.png' alt='Computer Lab' />
                  <p>Computer Lab</p>
                </div>
              </Col>
              
              <Col sm='2' className='resources equal-height-column'>
                <div className='btm-box'>
                  <img src='../images/college-mag.jpg' alt='College Magazine' />
                  <p>College Magazine</p>
                </div>
              </Col>
              
              <Col sm='2' className='resources equal-height-column'>
                <div className='btm-box'>
                  <img src='../images/anti-rag.jpg' alt='College Campus' />
                  <p>College Campus</p>
                </div>
              </Col>
              
              <Col sm='2' className='resources equal-height-column'>
                <div className='btm-box'>
                  <img src='../images/placement.jpg' alt='Placements' />
                  <p>Placements</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home