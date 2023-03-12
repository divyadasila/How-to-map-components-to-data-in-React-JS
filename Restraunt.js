import React from 'react'
import "./Restraunt.css"

import Menuu from './menuApi';

import Card from 'react-bootstrap/Card';

const Restraunt = () => {
  
  const dataComp =  Menuu.map((Menuu)=> {
    return(
      <Card style={{ width: '18rem'  }}>
    <Card.Body>
      <Card.Title>{Menuu.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Breakfast</Card.Subtitle>
      <img className='card-media' src='https://images.pexels.com/photos/7458752/pexels-photo-7458752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='no img'/>
      
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      </Card.Body>
  </Card>

    )
  })
   return(
    <>
    {dataComp}
    </>
  )
}
