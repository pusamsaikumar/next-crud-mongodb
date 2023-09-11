"use client"
import { useRouter } from 'next/navigation';
import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const newCourse = {
      title,
      description:desc
    };
    const res = await fetch("http://localhost:3000/api/courses",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newCourse)
    });
    const data = await res.json();
    if(res.status === 201){
     
      toast.success("Course created successfully...");  
      console.log("data",data)
     } 
     if( data.message === "Course Created Successfully"){
      setTimeout(() => {
        router.push("/")
      }, 5000);
 
     }

    console.log("newCourse",newCourse);
  }
  return (
        <>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Course Name' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder='Enter Course description' value={desc} onChange={(e)=> setDesc(e.target.value)} />
            <button type="submit">Add Course</button>
        </form>
        </>
  )
}

export default AddCourse;