import React from 'react';
import '../Functionalities/Dropdown.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loc from '../images/location-mp.png'
import { Container, DropdownDivider } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
  
const Dropdown = () => {
  return (
    <Container>
    <div className="dropdown">
          <button className="dropbtn">New Delhi</button>
          <div className="dropdown-content">
            <Col>
              <Row>{/* location*/}
              <Col><img src={loc} alt="location" width={40} height={40} /></Col>
              <Col><a href="#locations" className='ms-auto justify-content-start'>INDIA</a></Col> 
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              </Row>
                
              <Row> {/* nearby cities row */}
                <Row><p className='fw-bold'>NEARBY CITIES</p></Row>
                <Row>
                  <Col><a href="#">BENGALORE</a></Col>
                  <Col><a href="#">CHENNAI</a></Col>
                  <Col><a href="#">COIMBATORE</a></Col>
                  <Col><a href="#">PUNE</a></Col>
                  <Col></Col>
                </Row>
              </Row>
              <Row>{/* popular cities row */}
                <Row><p className='fw-bold'>POPULAR CITIES</p></Row>
                <Row>
                  <Col>
                  <Row><a href="#">BENGALORE</a></Row>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">covai</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col></Col>
                </Row>
              </Row>
              <Row>{/* other cities row */}
              <Row><p className='fw-bold'>POPULAR CITIES</p></Row>
                <Row>
                  <Col>
                  <Row><a href="#">BENGALORE</a></Row>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">covai</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                  <Row><a href="#">BENGALORE</a></Row>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">covai</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  <Row><a href="#">agra</a></Row>
                  <Row><a href="#">delhi</a></Row>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                  <Row><a href="#">BENGALORE</a></Row>
                  <Row><a href="#">chennai</a></Row>
                  {/* <Row><a href="#">pune</a></Row> */}
                  {/* <Row><a href="#">covai</a></Row> */}
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  {/* <Row><a href="#">agra</a></Row> */}
                  {/* <Row><a href="#">delhi</a></Row> */}
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  {/* <Row><a href="#">agra</a></Row> */}
                  {/* <Row><a href="#">delhi</a></Row> */}
                  </Col>
                  <Col>
                  <Row><a href="#">chennai</a></Row>
                  <Row><a href="#">pune</a></Row>
                  {/* <Row><a href="#">agra</a></Row> */}
                  {/* <Row><a href="#">delhi</a></Row> */}
                  </Col>
                  <Col></Col>
                </Row>
              </Row>
            </Col>
            {/* <Col><Divider orientation="vertical" variant="middle" flexItem /></Col> */}
            <Col></Col>
          </div>
        </div>
    </Container>
    
  );
};

export default Dropdown;
