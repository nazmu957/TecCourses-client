import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


const Checkout = () => {
     const courses = useLoaderData()
  const { title, details, image_url, category_id } = courses
    return (
    <>
      <Card className="mt-5 mb-5">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          {/* <Link to={`/category/${category_id}`}>
          
              <Button variant="primary">Get premium access</Button>
          </Link> */}
          {/* <Link to={'/checkout'}>
             <Button variant="primary">Get premium access</Button>
          
          </Link> */}
          
        </Card.Body>
      </Card>
    </>
  )
}

export default Checkout;