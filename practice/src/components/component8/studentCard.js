import React from 'react'
import {Card} from "react-bootstrap"
const StudentCard = ({isim,img,yas,kurs}) => {
  return (
    <Card style={{ width: '18rem',marginBottom:"1rem" }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{isim}</Card.Title>
        <Card.Title style={{textAlign:"center"}}>{yas}</Card.Title>
        <Card.Text style={{textAlign:"center"}}>
            {kurs}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StudentCard