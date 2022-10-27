import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CoursesReview = ({ courses }) => {
  const { _id, title, author, details, image_url, total_view } = courses
  //console.log(courses)
  return (
    <Container>
      
      <div className="card mb-3 bg-success bg-opacity-10 ">
        <div className="text-center bg-info">
        <h3>Course Information</h3>
      </div>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image_url}
            className="img-fluid  h-100 rounded-start"
            alt="..."
            //title="Biden"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {details.length > 250 ? (
                <p>
                  {details.slice(0, 250) + '...'}{' '}
                  <br/>
                  <Link to={`/checkout/${_id}`}><Button className="mt-3 fw-bold">Get premium access</Button></Link>
                </p>
              ) : (
                <p>{details}</p>
              )}
            </p>
            <p className="card-text">
              <small className="text-muted">Total View: {total_view}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default CoursesReview
