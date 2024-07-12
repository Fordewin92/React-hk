// src/components/Card.jsx
import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './Card.css';

const CustomCard = ({ image, title, description, link }) => (
  <Card className="custom-card">
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='blue' href={link} target="_blank">
        Más información
      </Button>
    </Card.Content>
  </Card>
);

export default CustomCard;
