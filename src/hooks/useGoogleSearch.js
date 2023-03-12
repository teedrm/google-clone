import { useState, useEffect } from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = 'e07c6958f80ed436c';

const useGoogleSearch = (term) => {
 const [data, setData] = useState(null);

 useEffect(() => {

    // endpoint connect to google custom search api
const fetchData = async () => {
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
    //change response into json
    .then(res => res.json())
    .then(result => {
        setData(result)
    })
}
fetchData();

 }, [term])
}

export default useGoogleSearch