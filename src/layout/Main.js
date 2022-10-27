import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../Pages/Shared/Header/Header'
import SideNav from '../Pages/Shared/SideNav/SideNav'

const Main = () => {
  return (
    <div>
        <Header></Header>
      <Container>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <SideNav></SideNav>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
