import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new Website", body: "Lorem Ipsum....", author: "mario", id: 1},
        {title: "Welcome Party!", body: "Lorem Ipsum....", author: "yoshi", id: 2},
        {title: "Web dev top tips", body: "Lorem Ipsum....", author: "luigi", id: 3}
    ])

    return (
        <div className="home">
            <Bloglist  blogs= {blogs} title= "HomePage"/>
        </div>
    )
}

export default Home