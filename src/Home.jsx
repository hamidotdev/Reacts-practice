import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) =>{
        const newBlog = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlog)
    }

    const [name, setName] = useState('Hamid')

useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
            setBlogs(data)
        })
}, []) //empty dependency array [only run once when the component mounts]


    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.successor === "Child")} title="Another Blogs" /> */}
            <button onClick={() => setName('Sulaiman')}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home