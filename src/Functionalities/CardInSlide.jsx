import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardInSlide.css'
import { Row } from 'react-bootstrap';

// BasicExample component now accepts props
function CardsHover({ title, text, imgSrc }) {
  return (
    
    
        
        
        <Card style={{ width: '300px' }} className='CardBody mt-5 ms-4'>
        <Card.Img variant="top" className='img' src={imgSrc} />
        <Card.Body >
            <Card.Title>{title}</Card.Title>
            <Card.Text className='CardText'>
            {text}
            </Card.Text>
            <Button className='buttonHover'>Go to prop</Button>
        </Card.Body>
        </Card>
        
    
    
  );
}

export default CardsHover;