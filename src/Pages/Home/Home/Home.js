import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesReview from '../../Shared/CoursesReview/CoursesReview';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'



const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
           <Carousel className="mt-5 ms-3">
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

           
            <h2 className="text-center p-4 text-primary"> Our TecCourses </h2>
            {
                allCourses.map(courses => <CoursesReview
                   key={courses._id}
                   courses={courses}
                ></CoursesReview>)
            }
        </div>
    );
};

export default Home;