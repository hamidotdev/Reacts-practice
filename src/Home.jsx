import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isLoading, errors} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) =>{
    //     const newBlog = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlog)
    // }

    // const [name, setName] = useState('Hamid')


    return (
        <div className="home">
            {errors && <div className="error">{errors}</div>}
            {isLoading && <div className="loading"> ....Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.successor === "Child")} title="Another Blogs" /> */}
            {/* <button onClick={() => setName('Sulaiman')}>Change Name</button>
            <p>{name}</p> */}
        </div>
    )
}

export default Home