"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteBtn = ({id}) => {
  const router = useRouter();
  const handleDelete = async()=>{
    const confirmed = confirm("Ara you sure?");
    if(confirmed){
        const res = await fetch(`http://localhost:3000/api/courses?id=${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':"application/json"
          }
        });
        if(res.status === 200){
          toast.success("Course deleted successfully....");
          router.refresh();
        }
    }
  }
  return (
    <>
    <ToastContainer />
    <button>
 
 <MdOutlineDelete  size={32} onClick={()=> handleDelete()} />
</button>
    </>
    
  )
}

export default DeleteBtn