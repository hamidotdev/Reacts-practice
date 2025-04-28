import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) =>{
                    if (!res.ok) {
                        throw Error("Could not fetch data from that resource")
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setIsLoading(false)
                })
                .catch((error) => {
                    setErrors(error.message)
                    setIsLoading(false)
                })
        }, 1000);
    }, [url]) //empty dependency array [only run once when the component mounts] 
       return {data, isLoading, errors}
}
export default useFetch;