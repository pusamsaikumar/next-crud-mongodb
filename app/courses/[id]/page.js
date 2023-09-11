'use client';

import getSingleCourse from '@/controllers/getSingleCourse'

import React from 'react'

const viewCourse = async({params:{id}}) => {
 
 console.log("id",id)
    const course = await getSingleCourse(id);
   
  return (
    <div className='detail-page'>
        <h2>Course Detail Page</h2>
        <hr />
  
              <div className='course-detail'>
            <h2>{course?.data?.title}</h2>
            <p>{course?.data?.description}</p>
        </div>
         
        
    </div>
  )
}

export default viewCourse