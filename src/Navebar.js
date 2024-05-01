import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'

import './Navebar.css'
import Footer from './Footer'

function Navebar() {
  const navigate = useNavigate()

  const [ show1, setShow1 ] = useState(false)
  const [ show2, setShow2 ] = useState(false)
  const [ show3, setShow3 ] = useState(false)
  const [ show4, setShow4 ] = useState(false)
  const [ show5, setShow5 ] = useState(false)
  const [ show6, setShow6 ] = useState(false)
  const [ show7, setShow7 ] = useState(false)
  const [ show8, setShow8 ] = useState(false)
  const [ show9, setShow9 ] = useState(false)
  const [ show10, setShow10 ] = useState(false)
  const [ show11, setShow11 ] = useState(false)
  const [ show12, setShow12 ] = useState(false)
  const [ show13, setShow13 ] = useState(false)

  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary topnav'>
        <Container fluid>
          <Navbar.Brand>
            <div className='logo-section'>
              <img src='./images/logo.png' alt='Murarka College' className='nav-logo' onClick={() => navigate('/')} />
              <h3 className='nav-logo-name' onClick={() => navigate('/')}>Murarka College</h3>
            </div>
          </Navbar.Brand>

          <Nav className='justify-content-center nav-iso'>
            <Nav.Item  className='naac-iso-item'>
              <img src='../images/naac.png' alt='NAAC' className='naac-iso-img' />
              <h5  className='naac-iso-text'>NAAC Accredited</h5>
            </Nav.Item>

            <Nav.Item  className='naac-iso-item'>
              <img src='../images/iso.png' alt='NAAC' className='naac-iso-img' />
              <h5  className='naac-iso-text'>ISO 9001:0000</h5>
            </Nav.Item>
          </Nav>
          
          <Nav className='justify-content-end'>
            <Nav.Item>
              <div className='nav-icons'>
                <a> <i class="fa fa-phone"></i> </a>
                <p className='nav-icons-value'>(+91) 94381001208</p>
              </div>
            </Nav.Item>
            
            <Nav.Item>
              <div className='nav-icons'>
                <a className='nav-icons' href= "mailto: Collegemaynaguri@gmail.com">
                  <a> <i class="fa fa-envelope"></i> </a>
                  <p className='nav-icons-value'>info@murarkacollegesult.in</p>
                </a>
              </div>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Navbar expand='lg' className="bg-body-tertiary bottomnav navbar-toggleable-sm text-center" variant='dark'>
        <Container fluid className='text-center'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse collapseOnSelect id='responsive-navbar-nav' className='justify-content-center'>
            <Nav className='me-auto'>
              <Nav.Item className='downnav'>
                <Nav.Link className='normal-link' active onClick={() => navigate('/')}>Home</Nav.Link>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='About' onMouseEnter={() => setShow1(true)} onMouseLeave={() => setShow1(false)} show={show1} className='nav-dropdown'  data-bs-theme="dark" active>
                  <NavDropdown.Item onClick={() => navigate('/history-of-the-college')}>History Of The College</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/principal-desk')}>Principal Desk</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/vision-mission-value')}>Mission, Vision & Goal</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/campus-map-layout')}>Campus Map & Layout</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/strategic-prospective-plan')}>Strategic/ Prospective Plan</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/human-values-and-professional-ethics')}>Human Values And Professional Ethics</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/core-values')}>Our Core Values</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/maintenance-policy')}>Maintenance Policy</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/best-practices')}>Best Practices</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/institutional-distinctive')}>Institutional Distinctive</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/college-gallery')}>College Gallery</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Administration' onMouseEnter={() => setShow2(true)} onMouseLeave={() => setShow2(false)} show={show2} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>Organogram</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Governing Body</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Our Faculty</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Teacher's Council</NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavDropdown title='Committee & Cell' onMouseEnter={() => setShow13(true)} onMouseLeave={() => setShow13(false)} show={show13} className='dropWhite'>
                      <NavDropdown.Item onClick={() => navigate('/')}>Anti Ragging Cell</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Purchase Committee</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Examination Committee</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Grievance Redressal Cell</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>IT Management Committee</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>All Committee Members</NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Non-Teaching Staff</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Code Of Conduct</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Disciplinary Rules</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Uniform Leave Rules</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Academics' onMouseEnter={() => setShow3(true)} onMouseLeave={() => setShow3(false)} show={show3} className='nav-dropdown' active>
                  <NavDropdown.Item>
                    <NavDropdown title='Departments' onMouseEnter={() => setShow12(true)} onMouseLeave={() => setShow12(false)} show={show12} className='dropWhite'>
                      <NavDropdown.Item onClick={() => navigate('/')}>Bachelor Of Arts</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Bachelor Of Science</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Bachelor Of Commerce</NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Time Table</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Results</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Examination Section</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Intake Capacity</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Program Outcome</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Academic Calendar</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Holiday List</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Courses Offered</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Admission' onMouseEnter={() => setShow4(true)} onMouseLeave={() => setShow4(false)} show={show4} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>Guideline</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Eligibility Criteria</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Admission Committee</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Fees Structure</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Activities' onMouseEnter={() => setShow5(true)} onMouseLeave={() => setShow5(false)} show={show5} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>Announcements</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Alumni</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>College Activities</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Amenities</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>NSS</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>NCC</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Sports & Games</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Students' onMouseEnter={() => setShow6(true)} onMouseLeave={() => setShow6(false)} show={show6} className='nav-dropdown' active>
                  <NavDropdown.Item>
                    <NavDropdown title='Facilities' onMouseEnter={() => setShow11(true)} onMouseLeave={() => setShow11(false)} show={show11} className='dropWhite'>
                      <NavDropdown.Item onClick={() => navigate('/')}>ICT Classroom</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Remedial Coaching</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Scholarship</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/')}>Career Counselling</NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Rules & Regulations</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Student Support Services</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Skill Development Program</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='IQAC' onMouseEnter={() => setShow7(true)} onMouseLeave={() => setShow7(false)} show={show7} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>About IQAC</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>AQAR</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Minutes of Meeting</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Action Taken Report</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Seminars & Workshops</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Academic And Administrative Audit</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Green Audit Report</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Quality Initiative</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>IQAC Report</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>NIRF</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>SSR 2022-23</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Library' onMouseEnter={() => setShow8(true)} onMouseLeave={() => setShow8(false)} show={show8} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>About The Library</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Library Rules</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Library Services</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>OPAC</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>N-List</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Question Paper Archive</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>E-Resources</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='Research & Publications' onMouseEnter={() => setShow9(true)} onMouseLeave={() => setShow9(false)} show={show9} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>Research Activity</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Ph.D Holders</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Research Papers</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Books And Chapters</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>College Prospectus</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <NavDropdown title='E-Governance' onMouseEnter={() => setShow10(true)} onMouseLeave={() => setShow10(false)} show={show10} className='nav-dropdown' active>
                  <NavDropdown.Item onClick={() => navigate('/')}>Feedback</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Online Grievance</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>College ERP</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>E-Teachers Diary</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>LMS</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/')}>Students Profile Mapping System</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              
              <Nav.Item className='downnav'>
                <Nav.Link className='normal-link' active onClick={() => navigate('/')}>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Administration</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Academics</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Admission</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Activities</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Students</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">IQAC</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Library</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Research & Publications</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">E-Governance</a>
      </li>
      <li class="nav-item active px-4">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav> */}

      {/* <nav className='navbar navbar-expand-lg navbar-dark bg-light'>
        <div className='container-fluid'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo01' area-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href=''></a>
              </li>

              <li className='nav-item'>
                <a className='nav-link active' href=''></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <Outlet />

      <Footer />
    </>
  )
}

export default Navebar