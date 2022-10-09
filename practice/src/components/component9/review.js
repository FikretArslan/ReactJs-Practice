import React from 'react'
import {Card} from "react-bootstrap"

const Review = ({item}) => {
    const {name,job,img,text}=item;
  return (
    <Card>
      <Card.Img variant="top" src={img} height="350px"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h4 style={{textAlign:"center"}}>{job}</h4>
        <Card.Text>
         {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Review