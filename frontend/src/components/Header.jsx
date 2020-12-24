import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header className='header'>
      <Navbar
        bg='primary'
        expand='lg'
        variant='dark'
        //collapseOneSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Store Up</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart px-1'></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/signin'>
                <Nav.Link>
                  <i className='fas fa-user px-1'></i>SignIn
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
