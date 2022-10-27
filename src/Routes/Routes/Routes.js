import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Category from '../../Pages/Category/Category/Category'
import Checkout from '../../Pages/Checkout/Checkout'
import Courses from '../../Pages/Courses/Courses/Courses'
import Fqa from '../../Pages/Fqa/Fqa'
import Blog from '../../Pages/Blog/Blog'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login/Login'
import Register from '../../Pages/Login/Register/Register'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
          path: 'checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
          
      },
      {
          path: '/fqa',
          element: <Fqa></Fqa>,
      },
      {
          path: '/blog',
          element: <Blog></Blog> ,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
])
