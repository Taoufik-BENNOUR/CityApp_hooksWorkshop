import React from 'react';
import { Card } from 'react-bootstrap';

const CityCard = ({city:{description,city,imageUrl}}) => {
  return <>
    <Card style={{ width: '30rem',marginTop:10 }}>
  <Card.Img variant="top" src={imageUrl} />
  <Card.Body>
    <Card.Title>{city}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
</Card>
  </>;
};

export default CityCard;
