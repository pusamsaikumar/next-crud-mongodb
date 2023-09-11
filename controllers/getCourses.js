
const URL="http://localhost:3000";

const getCourses = async() => {
    try{
       // const res = await fetch('http://localhost:3000/api/courses',{
        const res = await fetch( `${URL}`+'/api/courses',{
            cache:"no-store"
        });
        const courses = await res.json();
        return courses.data; 

    }catch(err){
        console.log(err)
    }
}

export default getCourses