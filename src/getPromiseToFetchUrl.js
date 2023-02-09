import { useState, useEffect } from "react";
import axios from 'axios';

export default function getPromiseToFetchUrl(apodApiUrl) {
    const [url, setUrl] = useState('');
    useEffect(() => {
      async function fetchApod() {
        const { data } = await axios.get(apodApiUrl);
        console.log(data);
        setUrl(data.url);
      }
  
      fetchApod();
    }, [url]);

    return url;
}