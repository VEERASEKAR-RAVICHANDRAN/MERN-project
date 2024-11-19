import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardText.css'
function CardText({ title, subtitle, text, linkText, linkHref }) {
  return (
    
    <Card style={{ width: '19rem' }} className='CardText1 mt-3 mb-5'>
      <Card.Body >
        <Card.Title className='designForTitle'>{title}</Card.Title> <span><Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle></span>
        
        <Card.Text>
          {text}
        </Card.Text>
        <Card.Link href={linkHref} className='cardlink'>{linkText}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardText;