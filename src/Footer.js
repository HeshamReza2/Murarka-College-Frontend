import React from 'react'

import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function Footer() {
    const navigate = useNavigate()

  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col sm='4'>
                    <Row className='logo'>
                        <img src='../images/logo.png' alt='Murarka College' />
                        <h4>Murarka College</h4>
                    </Row>

                    <Row className='address'>
                        <a><i class="fa-solid fa-location-dot"></i></a>
                        <p>A, B, C</p>
                    </Row>

                    <Row className='address'>
                        <a><i class="fa-solid fa-envelope"></i></a>
                        <p>info@murarkacollegesult.in</p>
                    </Row>

                    <Row className='address'>
                        <a><i class="fa-solid fa-phone"></i></a>
                        <p>(+91) 94381001208</p>
                    </Row>

                    <Row className='address apply'>
                        <button type='button' className='btn1'>Apply Online</button>
                    </Row>
                </Col>

                <Col sm='4' className='links'>
                    <ul>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>Home</a></a></li>
                        <li><a onClick={() => navigate('/history-of-the-college')}><i class="fa-solid fa-angles-right"></i> <a className='link-under'>Library</a></a></li>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>About</a></a></li>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>Admission</a></a></li>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>Faculty</a></a></li>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>Notice</a></a></li>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>Alumni</a></a></li>
                        <li><a onClick={() => navigate('/')}><i class="fa-solid fa-angles-right"></i> <a  className='link-under'>Contact Us</a></a></li>
                    </ul>
                </Col>

                <Col sm='4' className='text-center'>
                    <a>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8723807885126!2d86.74198927608326!3d25.241223029914746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1b7f93eb1234f%3A0xf49bea72736fb16d!2sMurarka%20College%2C%20Sultanganj!5e0!3m2!1sen!2sin!4v1714366023189!5m2!1sen!2sin" width="250" height="200" style={{ border: "0" }} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer