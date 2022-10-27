import React, { useContext, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'
import SideNav from '../SideNav/SideNav'
import logo from '../../../images/logo.png'
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [state, setState] = useState(false)
  const toggle = () => {
    setState(!state)
  }

  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error))
  }
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="primary bg-opacity-10"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top pb-1  "
            alt="React Bootstrap logo"
          />
          <Link className="text-decoration-none ms-3 fs-3 fw-bold " to="/">
            TecCourses
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="ps-3 text-decoration-none fs-5 fw-bold" to="/fqa">
              FQA
            </Link>
            <Link className="ps-4 text-decoration-none fs-5 fw-bold" to="/">
              Courses
            </Link>
            <Link className="ps-4 text-decoration-none fs-5 fw-bold" to="/blog">
              Blog
            </Link>
          </Nav>
          <Nav>
            <Button onClick={toggle} className=" bg-primary bg-opacity-75 fs-5 fw-bold me-3 h-25 pe-5 mt-1 w-25">
              {state ? 'dark' : 'light'}
            </Button>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  {/* <span>{user?.displayName}</span> */}
                  <Button className="fs-5 fw-bold bg-primary bg-opacity-10 border-0 text-primary" onClick={handleLogOut}> Log out</Button>
                </>
              ) : (
                <div className="d-flex">
                  <Link
                    className="text-decoration-none fs-5 fw-bold mt-1"
                    to="/login"
                  >
                    LogIn
                  </Link>
                  {/* <Button className="bg-light"><Link to="/register">Register</Link></Button> */}
                </div>
              )}
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: '45px', width:'45px' }}
                  roundedCircle
                  src={user?.photoURL}
                  title={user?.displayName}
                ></Image>
              ) : (
                
                  <FaUserAlt className="text-dark" style={{ height: '30px', width:'30px' }}></FaUserAlt>
               
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <SideNav></SideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
