import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CoursesReview from '../../Shared/CoursesReview/CoursesReview';

const Category = () => {
    const categoryCourses = useLoaderData();
    
    return (
        <div >
            <h2 className="text-center pb-3">Course List: {categoryCourses.length}</h2>
            {
                categoryCourses.map(courses => <CoursesReview
                key={courses._id}
                courses={courses}
                ></CoursesReview>)
            }
        </div>
    );
};

export default Category;