const BlogList = (props) => {
    const { blogs } = props; // Destructure the blogs prop
    // const blogs = props.blogs; // Alternatively, you can use this line to access the blogs prop
    // const blogs = [ // Sample data for testing
    // const title = props.title; // Destructure the title prop
    const { handleDelete } = props
    console.log(props);
    return (
        <div className="blog-list">
            {/* <h1>{title}</h1> */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <p>Successor: {blog.successor}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>

    )
}

export default BlogList