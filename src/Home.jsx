import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new Website", body: "Lorem Ipsum....", author: "mario", id: 1},
        {title: "Welcome Party!", body: "Lorem Ipsum....", author: "yoshi", id: 2},
        {title: "Web dev top tips", body: "Lorem Ipsum....", author: "luigi", id: 3}
    ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
