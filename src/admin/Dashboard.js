import React, { useState } from 'react'
import './Dashboard.css'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNav from './AdminNav'

function Dashboard() {
  return (
    <>
        <Container fluid style={{ 'margin-top': '10px'}}>
            <Row>
                <Col sm='3' className='p-0'>
                    <AdminNav />
                </Col>
                <Col sm='9'>Hi</Col>
            </Row>
        </Container>
    </>
  )
}

export default Dashboard