import { useState, useEffect } from "react";
import axios from 'axios';

export default function getPromiseToFetchUrl(apodApiUrl) {
    const [url, setUrl] = useState('');
    const [laterUrl, setLaterUrl] = useState('');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLaterUrl(url);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      async function fetchApod() {
        const { data } = await axios.get(apodApiUrl);
        setUrl(data.url);
      }
  
      fetchApod();
    }, [url]);

    return laterUrl;
}