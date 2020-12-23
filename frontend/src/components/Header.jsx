import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar
        className='table-primary'
        expand='lg'
        variant='dark'
        //collapseOneSelect
      >
        <Container>
          <Navbar.Brand href='/'>Store Up</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='chart'>
                <i className='fas fa-shopping-cart px-1'></i>Cart
              </Nav.Link>
              <Nav.Link href='signin'>
                <i className='fas fa-user px-1'></i>SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
