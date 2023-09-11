import mongoDbConnect from "@/lib/mongodb"
import Course from "@/models/course"
import { NextResponse } from "next/server"

// GET ALL COURSES:
// export const GET = (req)=>{
//  try{
//     const courses = [
//         {
//             id:1,
//             title:"Next js course",
//             description:"this is a fundamental course for web dev"
//         },
//         {
//             id:2,
//             title:"React js course",
//             description:"this is a fundamental course for web dev application faster response"
//         },
       
       
//     ]
//     return NextResponse.json({message:'ok',data:courses},{status:200})
//  }catch(err){
//     return NextResponse.json({message:"failed to fetch courses data",err},{status:500})
//  }
// }

// get all course using database
export const GET = async (req)=>{
    try{
         // to connect db
            await mongoDbConnect();
         // get data using model
         const courses = await Course.find(); // find() is used to find all data of courses
       return NextResponse.json({message:'ok',data:courses},{status:200})
    }catch(err){
       return NextResponse.json({message:"failed to fetch courses data",err},{status:500})
    }
   }
   

// CREATE A SINGLE COURSE
export const POST =async(request) =>{
    try{
            // get data from the request body

            const {title,description} = await request.json();
            const newCourse = {
                title,
                description
            }
            // connect to db
            await mongoDbConnect();
            
            // model to create course
            await Course.create(newCourse)          // await Course.create({title,description})
            return NextResponse.json({message:"Course Created Successfully",data:newCourse},{status:201})
    }catch(err){
        return NextResponse.json({message:"failed to fetch courses data",err},{status:500})
    }
}

// DELETE A SINGLE COURSE
export const DELETE =async(request)=>{
    try{
        // to get the id from request url
        const id = await request.nextUrl.searchParams.get("id");
        //console.log("id",id);

        // connect to db
        await mongoDbConnect();

        // delete with model
        await Course.findByIdAndDelete(id);
        return NextResponse.json({
            message:'Course has been deleted successfully!'
        },
        {status:200})
    }catch(err){
        return NextResponse.json(
            {
                message:'failed to delete', err
            },
            {status:500}
        )
    }
}