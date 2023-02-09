import { Suspense, useEffect, useState } from 'react'
import fetchUrl from './fetchUrl';

export function ApodSuspenseWrapper() {    
  return (
    <Suspense fallback={<div>Loading Your Astronomy Picture of the Day! ...</div>}>
      <Apod />
    </Suspense>
  )
}

export function Apod() {
  const [urlToApod, setUrlToApod] = useState(null);

  const url = fetchUrl('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');

  useEffect(() => {
    setUrlToApod(url);
  }, [url]);

  
  return (
    urlToApod
      ? <div className='apod-image'>
          <img src={urlToApod}></img>
        </div>
      : <h2>Loading Your Astronomy Picture of the Day! ...</h2>
  )
}

export default ApodSuspenseWrapper
