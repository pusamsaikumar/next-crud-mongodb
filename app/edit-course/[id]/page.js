import EditForm from '@/components/EditForm';
import getSingleCourse from '@/controllers/getSingleCourse';
import React from 'react'

const EditCourse = async ({params:{id}}) => {
  const course = await getSingleCourse(id);
  return (
    
    <>
    <EditForm course={course?.data}  />
    </>
  )
}

export default EditCourse;