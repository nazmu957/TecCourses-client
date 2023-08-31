import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace: true});
        })
        .catch(error => console.error(error))
    } // const [categories, setCategories] = useState([]);
    
   const handleGithubSign = () =>{
     providerLogin(githubProvider)
     .then(result => {
       const user = result.user; 
       console.log(user);
       navigate(from,{replace: true});
     })
     .catch(error => {
       console.error('error: ', error)
     })
   }
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from,{replace: true});
        })
        .catch(error =>{
             console.error(error)
             setError(error.message);
            })
    }
    return (
         <Container className="w-75 mt-5 bg-info border border-primary  rounded shadow ">
           <h2 className='pt-3 text-center'>LogIn</h2>
           <Form className="pt-4 px-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter your email"  required/>
        
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Enter your password" required/>
      </Form.Group>
      
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br/>

      <div className="mt-3 ">
        <Link className="fs-5 text-dark " to='/register'>Go to Register</Link>
      </div>
      
      
    </Form>
       <div className='mt-4 mb-2 text-center'>
         <h5>LogIn  With</h5>
          <Button className="me-3" onClick={handleGoogleSignIn}>Google</Button> 
          {/* <Button onClick={handleGithubSign} >GitHub</Button>  */}
        </div>
  </Container>
    );
};

export default Login;