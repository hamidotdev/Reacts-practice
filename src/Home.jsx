import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState(null)

    const handleDelete = (id) =>{
        const newBlog = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlog)
    }

    const [name, setName] = useState('Hamid')

useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) =>{
                if (!res.ok) {
                    throw Error("Could not fetch data from that resource")
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data)
                setIsLoading(false)
            })
            .catch((error) => {
                setErrors(error.message)
                setIsLoading(false)
            })
    }, 1000);
}, []) //empty dependency array [only run once when the component mounts]


    return (
        <div className="home">
            {errors && <div className="error">{errors}</div>}
            {isLoading && <div className="loading"> ....Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.successor === "Child")} title="Another Blogs" /> */}
            <button onClick={() => setName('Sulaiman')}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home