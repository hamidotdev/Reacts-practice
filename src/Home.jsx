const Home = () => {
    const handleClick = (f) =>{
        console.log("Hello, Ninja", f.target);
    }

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}`, e.target);
    }

    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}> Click Me </button>
            <button onClick={(e) => handleClickAgain("Maria", e)}>Click Me Again</button>
        </div>
    )
}

export default Home