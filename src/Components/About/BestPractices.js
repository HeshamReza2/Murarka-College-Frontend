import React from 'react'
import './BestPractices.css'
import AboutBanner from '../AboutBanner'
import { Col, Container, Row } from 'react-bootstrap'

function BestPractices() {
  return (
    <>
        <AboutBanner name='Best Practices' />

        <Container>
            <Row className='best-practice'>
                <Col sm='12' className='practice-head'>
                    <h4>BEST PRACTICE - I</h4>
                </Col>

                <Col sm='12' className='practice-details'>
                    <h6>Facilities for achieving educational goal</h6>
                    <div className='practice-details-points'>
                        <p><b>The Context:</b> The College is the single Co-Education College is in Bagodar Sariya Subdivision which caters to the demands of providing higher education to boys & girls students coming from nearby rural areas. Most of the students coming from agricultural family background, disadvantaged community, minority community and economically weaker section of the society seek higher education in this college.</p>

                        <br />

                        <p><b>Objectives:</b> To provide facilities to the student in achieving their educational goal. To provide financial assistance and education support to students from disadvantage community, minority community and economically weaker section of the society. It is a policy of the State Government, which is practiced by the college with highest priority.</p>

                        <br />

                        <p><b>The Practice:</b> Some reflections of the strategies adopted to which access to higher education to a wide range of students coming from rural community disadvantaged community, minority community and economically weaker section of the society are mentioned below.</p>

                        <br />

                        <p><b>Relaxation in fee:</b> All the students enrolled in the college are exempted from tuition fee as per the government policy prevalent in the state of Jharkhand. Miscellaneous fees (Admission, Development, Library, Building, Registration etc.) which are deposited by the student of ST, SC, OBC (Excluding Creamy Layer) in the college are fully refundable by District Welfare Department in the bank A/C of the students. Student from faraway above 25 km. are eligible in relaxation in tuition on fee on the ground of their application. For improving higher education in most extremely back word areas where no higher education proving institution is available its pressed have.</p>

                        <br />

                        <p><b>Reservation of seats for admission of SC/ST/OBC Students:</b> During admission the SC/ST/OBC students get reservation on priority basis respectively of the total seats available in the course. Physically disabled students are given due consideration in the admission process as per policy of the Jharkhand Government.</p>

                        <br />

                        <p><b>Scholarships:</b> Welfare and Government scholarship are given to SC, ST, OBC and minority students. The college administration is very prompt and gives special support so that these students could get scholarship in time.</p>

                        <br />

                        <p><b>Problems encountered and resources required:</b> There is a tendency to choose a combination of History, Sociology and Hindi among large no. of students, resulting in crowd of students in these Subjects which some time becomes unmanageable. To fulfill the resources required for this practices Ad-hoc teachers have been appointed.</p>
                    </div>
                </Col>

                <Col sm='12' className='practice-head second-practice'>
                    <h4>BEST PRACTICE - II</h4>
                </Col>

                <Col sm='12' className='practice-details'>
                    <h6>Make classroom interesting</h6>
                    <div className='practice-details-points'>
                        <p><b>Objectives of the Practice:</b> Empirical knowledge tells us that education uplifts and enriches human minds but sometimes our students find the classes boring and monotonous. An uninterested student cannot be a good learner, and this affects the quality of his education. The objective of this practice is to make the student ‘want’ to learn rather than ‘have’ to learn.</p>

                        <br />

                        <p><b>The Context:</b> The syllabus of any HEI is lengthy, complex and has a fixed time for its completion. Teachers must move in a regular pace to complete the syllabus in time. The process may not be an easy ride for our students. If the student misses any part in between he begins to lose control over the subject.</p>

                        <br />

                        <p><b>The Practice:</b> Its true the content is the same, the key is in presentation...
                        <br />
                        We follow the following practice&mdash;
                            <ul>
                                <li>Teacher should be very clear on the topic to be taught in the class.</li>
                                <li>Practice at home for the best presentation.</li>
                                <li>Don’t hesitate to infuse humour and anecdotes in between.</li>
                                <li>Use of multi-media for presentation.</li>
                                <li>Applaud student on her merits, good behavior, attentiveness and other qualities</li>
                                <li>Make learning more and more interactive and participative.</li>
                                <li>Motivate students to become achievers.</li>
                            </ul>
                        </p>

                        <br />

                        <p><b>Problem Encountered and Resources Required:</b> 
                            <ul>
                                <li>The challenge is to remain innovative and fresh in presentation.</li>
                                <li>Pay attention to all the students.</li>
                                <li>Maintain the decorum of the class.</li>
                                <li>Teachers require good quality of multi-media content for the presentation</li>
                            </ul>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default BestPractices