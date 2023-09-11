

// get data by course id usinq params 

import mongoDbConnect from "@/lib/mongodb"
import Course from "@/models/course";
import { NextResponse } from "next/server";

export const GET = async (req,{params:{id}})=>{
    try{
        // to connect db
        await mongoDbConnect();
        // to get single data using with this model
        const course = await Course.findOne({_id:id})   // _id: 9838470274592 it is key of the database object
        return NextResponse.json({
            message:'ok',
            data:course
        },{status:200})
    }catch(err){
        return NextResponse.json({
            message:'failed to fetch the single course data list ',
            err
        },{status:500})
    }   
}

// update /EDIT the course list by params id
export const PUT = async(req,{params:{id}}) =>{
    try{
        // get data from req body;
        const { newTitle: title, newDescription:description} = await req.json();
        const newCourse = {
            title,
            description
        }
        // connect to db
        await mongoDbConnect();

        // edit the course list by using model
        await Course.findByIdAndUpdate(id,newCourse);

        return NextResponse.json(
            {
                message:'Course has been updated successfully',
                data:newCourse
            },
            {
                status:201
            }
        )
    }catch(err){
        return NextResponse.json({
            message:"Course updation has been failed.",
            err
        },
        {
            status:500
        }
        )
    }
}