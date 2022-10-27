import React from 'react'
import notfound from '../images/notfound.png'
import { Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container>
      <Row>
        <div>
          <img
            src={notfound}
            width="100%"
            height="700"
            
          />
        </div>
      </Row>
    </Container>
  )
}

export default NotFound
