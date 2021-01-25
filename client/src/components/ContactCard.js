import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';



export const ContactCard = ({contact}) =>{
  return (
    <div>
      <Card body inverse color="danger">
        <CardTitle tag="h5">{contact.name}</CardTitle>
        <CardText>{ contact.email }</CardText>
        <CardText>{ contact.email }</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  )
}


