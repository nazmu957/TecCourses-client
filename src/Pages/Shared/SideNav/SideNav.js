import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'

const SideNav = () => {
  const { providerLogin } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => console.error(error))
  }
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user

        console.log(user)
      })
      .catch((error) => {
        console.error('error: ', error)
      })
  }
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/courses-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  })
  return (
    <div className="bg-success bg-opacity-25 border border-primary shadow  rounded">
      <h2 className="text-center p-3 fw-bold ">Course List </h2>
      <div className="ms-5 pt-3">
        {categories.map((category) => (
          <Button className="mb-3 w-75 bg-primary bg-opacity-75 shadow p-3 mb-3  rounded" key={category.id}>
            <Link className="text-light text-decoration-none  fw-bold" to={`/category/${category.id}`}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div  >
      <div className="text-center pb-3 pt-5">
          <h2 className="fs-4">Sign In With</h2>
      <Button className="me-3" onClick={handleGoogleSignIn}>Google</Button>
      
      <Button onClick={handleGithubSignIn}>Github</Button>
      </div>
    </div>
  )
}

export default SideNav
