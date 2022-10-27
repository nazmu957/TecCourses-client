import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Fqa = () => {
    return (
      <Container>
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why You Take Our Course?</Accordion.Header>
        <Accordion.Body>
         "We have always enjoyed helping others learn, so we knew we wanted to pursue a career in education. We have enjoyed our other education courses so far, but it's important to us as an educator that I'm able to assist all types of students.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is teaching techniques ??</Accordion.Header>
        <Accordion.Body>
          Teaching methods are the broader techniques used to help students achieve learning outcomes, while activities are the different ways of implementing these methods. Teaching methods help students: master the content of the course. learn how to apply the content in particular contexts.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
    );
};

export default Fqa;