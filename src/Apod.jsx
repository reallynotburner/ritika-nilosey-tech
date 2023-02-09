import { useEffect, useState } from 'react'
import axios from 'axios';

function Apod() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    async function fetchApod() {
      const { data } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      console.log(data);
      setUrl(data.url);
    }

    fetchApod();
  }, []);

  return (
    <div className='apod-image'>
      <img src={url}></img>
    </div>
  )
}

export default Apod
