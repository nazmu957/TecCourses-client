import React from 'react'
import { Container } from 'react-bootstrap'

const Blog = () => {
  return (
    <Container>
        <h1 className="text-center">Blog</h1>
      <div>
        <h3> 1. what is `cors`?</h3>
        <p>
          Image result for what is `cors`? Cross-Origin Resource Sharing (CORS)
          is an HTTP-header based mechanism that allows a server to indicate any
          origins (domain, scheme, or port) other than its own from which a
          browser should permit loading resources.
        </p>
      </div>
      <div>
        <h3>
          2.Why are you using `firebase`? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
      </div>
      <div>
        <h3> 3.How does the private route work?</h3>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div>
        <h3>4. What is Node? How does Node work?</h3>
        <p>
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
    </Container>
  )
}

export default Blog
