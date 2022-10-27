import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'

const SideNav = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://teccourses-server.vercel.app/courses-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  })
  return (
    <div className="bg-success bg-opacity-25 border border-primary shadow  rounded mt-5">
      <h2 className="text-center p-3 fw-bold ">Course List </h2>
      <div className="ms-5 pt-3">
        {categories.map((category) => (
          <Button
            className="mb-3 w-75 bg-primary bg-opacity-75 shadow p-3 mb-3  rounded"
            key={category.id}
          >
            <Link
              className="text-light text-decoration-none  fw-bold"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SideNav
