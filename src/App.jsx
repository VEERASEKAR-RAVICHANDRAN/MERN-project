import React from 'react'
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from './Functionalities/Dropdown';
import './Functionalities/Dropdown.css';
import logo from './images/logo-mp.png'
import prime from './images/prime.png'
import DropdownSecond from './Functionalities/DropdownSecond';
import Container from 'react-bootstrap/Container';
import { Routes, Route, Link } from "react-router-dom";
import FormValidation from './Functionalities/Form';
import PostProperty from './Components/PostProperty';
import Home from './Components/Home';
// import Rent from './Components/Nav-underline/Rent';
import './App.css'
import Divider from '@mui/material/Divider';
import properties from './json/data.json'
// import FormValidation from './Form';
// import { Carousel } from 'react-bootstrap';



const App = () => {
  return (
    
    <div className='font'>
      <Container fluid>
        
          {/* navbar */}
        <Row >
          {/* first main nav bar */}
        
        <Navbar  expand="lg" className='background justify-content-center '>
        <Navbar.Brand>
        <Link to="*"><img src={logo} alt="logo" height={40} width={200} className='ms-3'></img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* main nav bar */}
          <Nav className="ms-4" >
            <NavItem>
              <NavLink href="#home">
                <Container>
                <Dropdown/>
                </Container>
                
              </NavLink>
            </NavItem>
          </Nav>
          {/* prime membership dd */}
          <Nav className="ms-auto  justify-content-end" >
            <NavItem>
              <NavLink href="#home">
                {/* <Dropdown/> */}
                <div className="dropdown2">
                  <button className="dropbtn2">MB prime</button>
                    <div className="dropdown-data width-prime" >
                      <div className='mb-prime text-center'>
                        <img src={prime} alt="prime" width={40} height={40}/>
                        <h3>Introducing MB prime</h3>
                        <p className='light'>Pay zero commission--save time and money</p>
                      </div>
                      <div className='text-center'>
                      <p>Contact upto 30 Owners directly </p>
                      <p>Access to Prime Exclusive Properties </p>
                      <button className='join-prime text-center'>join now</button>
                      </div>
                      
                    </div>
                </div>
              </NavLink>
            </NavItem>
          </Nav>

          {/* login dd */}
          <Nav >
            <NavItem>
              <NavLink href="#home">
                <div className="dropdown2 me-5">
                  <button className="dropbtn2">login</button>
                    <div className="dropdown-data width-login" >
                      <div className=' justify-content-start mt-4'>
                        {/* <p className='fw-bold'>My activity</p> */}
                        <Divider textAlign="left">My Activity</Divider>
                        <a href="" className='fw-bold fs-small'>Requested Properties <span className='free'>New</span> </a>
                        <a href="" className='fw-bold fs-small'>Contacted Properties</a>
                        <a href="" className='fw-bold fs-small'>Viewed Properties</a>
                        <a href="" className='fw-bold fs-small'>Shortlisted Properties</a>
                        <a href="" className='fw-bold fs-small'>Searches</a>
                        <Divider variant="middle" component="li" />
                        <a href="" className='fw-bold fs-small'>Recommendations</a>
                        <a href="" className='fw-bold fs-small'>My profile</a>
                        <Divider component="li" />
                        <button className='join-prime text-center ms-4 mt-4'>login</button>
                        <p className='fw-normal ms-4'>New to mybricks <span className='fw-normal ms-3'><Link to="/signin" >sign in</Link></span></p>
                        
                      </div>
                      
                    </div>
                </div>
              </NavLink>
              
            </NavItem>
          </Nav>
        </Navbar.Collapse>

        {/* post property button */}

        <button className='button me-4  '><Link to="/prop" className='Link-name'>Post Property</Link> <span className='free'>FREE</span></button>


          
        </Navbar>
        </Row>      
      </Container>
      


      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path="/signin" element={<FormValidation/>} />
        <Route path="/prop" element={<PostProperty/>} />
      </Routes>
      
    </div>
    
  )
}



export default App

