import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new Website", body: "Lorem Ipsum....", author: "mario", successor: "Child", id: 1},
        {title: "Welcome Party!", body: "Lorem Ipsum....", author: "yoshi", successor: "Niece",  id: 2},
        {title: "Web dev top tips", body: "Lorem Ipsum....", author: "luigi", successor: "Child",  id: 3}
    ])

    const handleDelete = (id) =>{
        const newBlog = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlog)
    }

    const [name, setName] = useState('Hamid')

useEffect(() => {
    console.log("UseEffect ran");
}, [blogs]) //empty dependency array [only run once when the component mounts]


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.successor === "Child")} title="Another Blogs" /> */}
            <button onClick={() => setName('Sulaiman')}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home