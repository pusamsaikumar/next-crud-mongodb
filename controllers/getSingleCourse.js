
//url = "http://localhost:3000/api/courses/64faf9bbe2d6897affe36771"

 const getSingleCourse = async(id) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/courses/${id}`,{
            cache:'no-store'
        });
        const course = await res.json();
        return course;
    }catch(err){
        console.error(err)
    }
}

export default getSingleCourse;
