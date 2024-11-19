import React from 'react'
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import logo from './images/logo-mp.png'
const Navbar = () => {
  return (
    <div>
        <Navbar bg="danger" expand="lg" className='bg'>
      <Navbar.Brand href="#home">
      <img src={logo} alt="logo" height={50} width={200}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <NavItem>
            <NavLink href="#home">
              <Dropdown/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#features">About
            {/* <Dropdown/> */}
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="#pricing">Service</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pricing">Project</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pricing">Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pricing">Contact</NavLink>
          </NavItem> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbar