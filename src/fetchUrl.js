import { useState, useEffect } from "react";
import axios from 'axios';

export default function fetchUrl(apodApiUrl) {
    const [url, setUrl] = useState('');
    const [laterUrl, setLaterUrl] = useState(null);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLaterUrl(url);
        }, 5000);
        return () => clearTimeout(timer);
    }, [url]);

    useEffect(() => {
      async function fetchApod() {
        const { data } = await axios.get(apodApiUrl);
        setUrl(data.url);
      }
  
      fetchApod();
    }, []);

    return laterUrl;
}
