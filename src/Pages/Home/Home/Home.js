import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesReview from '../../Shared/CoursesReview/CoursesReview';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>TecCOURSES : {allCourses.length}</h2>
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