import { useState } from "react";

const Home = () => {

    const [name, setNaame] = useState("Hamid")
    const [age, setAge] = useState(20)

    const handleClick = (f) =>{
        console.log("Hello, Ninja", f.target);
        setNaame("Ayomide")
    }

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}`, e.target);
        setAge(19)
    }

    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}> Click Me </button>
            <button onClick={(e) => handleClickAgain("Maria", e)}>Click Me Again</button>
            <p>{name} is {age} years old</p>
        </div>
    )
}

export default Home