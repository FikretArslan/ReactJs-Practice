import React from 'react'
import data from "../../assets/data/reviews.json"
import Review from './review'
import {Container,Row,Col} from "react-bootstrap"
export const Reviews = () => {
  return (
    <Container>
        <Row>
            {
               data.map((item)=>( <Col sm={6} lg={4} key={item.id}><Review item={item}/></Col>)) 
            }
           
        </Row>
    </Container>
  )
}
