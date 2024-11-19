import React from 'react'
import '../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import { Seperator } from "@radix-ui/themes";
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import DropdownSecond from '../Functionalities/DropdownSecond';
import './Home.css'
import MultiSelectLocation from '../Functionalities/Multiselect';
import { Link, Route, Routes } from 'react-router-dom';
import PostProperty from './PostProperty';
import Buy from './Buy';
import Rent from './Rent';
import Pg from './Pg';
import Commercial from './Commercial';
import Plot from './Plot';
import NewProject from './NewProject';
import MultiSelectBHK from '../Functionalities/FlatSelection';
import search from '../images/search-icon.png'
// import loc from '../images/location-mp.png'
import PriceRangeSelection from '../Functionalities/PriceMultiselect';
// import CardText from '../Functionalities/CardText';
// import Slider from '../Functionalities/Slider';
// import MultipleItems from '../Functionalities/CardSlide';
// import Slider from '../Functionalities/Slider';

// import SearchBar from '../Functionalities/Searchbar';


const Home = () => {
  return (
    <div>
        {/* second block */}
        <Container fluid>

          <Row className='shadow '>{/* dropdowns in home */}
            <DropdownSecond/>
          </Row>
          <Row className='mt-5 ms-1 mb-5'>{/*text,navbar,search in home */}
            <Col sm={12}>
              <Row>{/*heading text */}
                <h3 className='text-center mt-auto'>Welcome back! Let’s continue your search </h3>
              </Row>
              <Row className=' mt-3'> {/*nav with underline */}
                <Col sm={12} className='me-auto '>{/*nav with underline */}
                  <Nav variant="underline" defaultActiveKey="/home" className='text-center navstyle justify-content-center '>
                    <Nav.Item className="ml-auto">{/*buy nav */}
                      <Nav.Link eventKey="buy" className='color'><Link to="/*" className='Link-name'>Buy</Link></Nav.Link>
                    </Nav.Item >
                    <Nav.Item className="ml-auto">{/*rent nav */}
                      <Nav.Link eventKey="rent" className='color'><Link to="/rent" className='Link-name'>Rent</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto">{/*new project nav */}
                      <Nav.Link eventKey="new project" className='color'><Link to="/newproj" className='Link-name'>New project</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto">{/*pg nav */}
                      <Nav.Link eventKey="pg" className='color'><Link to="/pg" className='Link-name'>PG</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto">{/*plot nav*/}
                      <Nav.Link eventKey="plot" className='color'><Link to="/plot" className='Link-name'>Plot</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto dropdown-show">{/*commercial nav */}
                      <Nav.Link eventKey="commercial" className='color'><Link to="/commercial" className='Link-name'>Commercial</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto dropdown-show">{/*props nav */}
                      <Nav.Link eventKey="property" className='color'><Link to="/prop" className='Link-name'>Post Property</Link></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              <Row className=' mt-5 '>{/*search-bar */}
              <Row>

                <Col lg={1} md={0} sm={0}></Col>
                <Col lg={10} md={12} sm={12}>
                <Row className='searchBorder '>
                  <Col>{/*location multiselect*/}
                  <Row>
                  <MultiSelectLocation/>
                  {/* <span><img src={loc} alt="location" width={20} height={20}/></span> */}
                  </Row>
                  
                  </Col>
                  <Col className='ms-none'>{/*flat multiselect*/}
                  <MultiSelectBHK/>
                  </Col>
                  <Col>{/*price multiselect */}
                  <PriceRangeSelection/>
                  </Col>
                  <Col className='me-none ms-5'>{/*search buitton */}
                  <button type="button" className='search search-btn ms-5   px-3 py-1 fw-bold'> <span><img src={search} alt="search icon" w-20 h-20 className='me-3 ms-0'/></span>search</button>
                </Col>
                </Row>
                </Col>
                
                <Col lg={2} md={0} sm={0}></Col>

              </Row>
              
              
                
                
              </Row>
            </Col>
            {/* */}
          </Row>
        </Container>


        {/* ROUTING */}
        <Routes>
          <Route path="/prop" element={<PostProperty/>}/>
          <Route path="/*" element={<Buy/>}/>
          <Route path="/rent" element={<Rent/>}/>
          <Route path="/pg" element={<Pg/>}/>
          <Route path="/commercial" element={<Commercial/>}/>
          <Route path="/plot" element={<Plot/>}/>
          <Route path="/newproj" element={<NewProject/>}/>
        </Routes>
        

    </div>
  )
}

export default Home