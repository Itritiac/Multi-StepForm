import React from 'react'

import { Link } from 'react-router-dom'
import { Nav, Container } from 'react-bootstrap'
import NavBar from 'react-bootstrap/Navbar'

export const Navbar = () => {

  return (
    <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-5">
      <Container>
        <Link to="/">
          <NavBar.Brand>Form App</NavBar.Brand>
        </Link>
        <NavBar.Toggle aria-controls="responsive-navbar-nav" />
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className="nav-link"
              exact to="/multi-stepsform">
              Multi Stepform
              </Link>
            <Link
              className="nav-link"
              exact to="/notes">
              Notes
              </Link>
          </Nav>
          <Nav>
            <Nav.Link
              target="_blank"
              href="https://github.com/Itritiac">
              Check GitHub
          </Nav.Link>
            <Nav.Link
              href="https://itritiac.website/">
              Check Portofolio
          </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}
