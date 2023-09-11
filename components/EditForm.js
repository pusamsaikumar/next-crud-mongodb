"use client";
import { useRouter } from 'next/navigation';
import React,{useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditForm = ({course}) => {
  console.log("id coure",course._id)
  const [title,setTitle] = useState(course.title);
  const [desc,setDesc] = useState(course.description);
  const router = useRouter();
 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const newCourse = {
      newTitle:title,
       newDescription:desc
    }
    console.log("ne",newCourse)
    const res = await fetch(`http://localhost:3000/api/courses/${course._id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newCourse)
    });
    const data = await res.json();
    if(res.status === 201 ){
      toast.success(data.message);
      setTimeout(()=>{
        router.push("/")
      },[2000])

    }
    console.log("d",data)
  }
  return (
  <div>
    <ToastContainer />
     <form onSubmit={handleSubmit}>
    <input type="text" name="title" 
    placeholder='Enter Course Title' 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input type="text" placeholder='Enter Course Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
    <button type='submit'>Update Courses</button>
   </form>
  </div>
  )
}

export default EditForm