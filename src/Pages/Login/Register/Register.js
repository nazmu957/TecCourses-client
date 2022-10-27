import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'
const Register = () => {
    const [error, setError ] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {createUser,updateUserProfile} = useContext(AuthContext);
    
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        //console.log(name,email,photoURL,password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        });
    }
    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error));
    }

   
  return (
    <Container className="w-75 mt-5 bg-info border border-primary  rounded shadow ">
      <h2 className='pt-3 text-center'>Registration Form</h2>
      <Form className="pt-4 px-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password"   required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Link className="fs-5 text-dark " to='/register' to='/login'>Go to Login</Link>
      </Form.Group>

      <Form.Text className="text-danger">
          {error}
      </Form.Text>
      <Button className="mb-3" variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </Container>
  )
}

export default Register
