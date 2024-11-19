import React from 'react'
import CardText from '../Functionalities/CardText';
import { Col, Container, Row } from 'react-bootstrap';
import './Buy.css'
import Resizable from '../Functionalities/CardSlide';
import UnevenSetsFinite from '../Functionalities/CardSlide';

const Buy = () => {
  return (
    <div>
      <Container fluid>
          <Row className='show'>
            <h3 className='none'> <span className='heading'>Because</span> you selected chennai</h3>
          </Row> 
          <Row className='mx-0 mb-3 show'>{/*card with only text */}
            <Col xl={3} lg={6} sm={12} md={12}> {/*card 1 */}
              <CardText
              title="6k+" 
              subtitle="properties listed for you"  
              linkText="continuue last search" 
              linkHref= "/home"
              />
            </Col>
            <Col xl={3} lg={6} sm={12} md={6}> {/*card 2 */}
              <CardText 
              text="get personilized property recommemdation" 
              linkText="Read More" 
              linkHref="/prop" 
              />
            </Col>
            <Col xl={3} lg={6} sm={12} md={6}>{/*card 3 */}
              <CardText 
              title="100+" 
              subtitle="owner properties in chennai" 
              linkText="Read More" 
              linkHref="/prop" 
              />
            </Col>
            <Col xl={3} lg={6} sm={12} md={6}> {/*card 4 */}
              <CardText 
              title="200+" 
              subtitle="popular properties in location" 
              linkText="go to props" 
              linkHref="/prop" 
              />
            </Col>
          </Row>
          <Row>{/* <Slider/> */}
            <Row><h3> <span className='heading'>popular</span> owner properties</h3></Row>
            <UnevenSetsFinite/>
          </Row>
          
      </Container>
    </div>
  )
}

export default Buy