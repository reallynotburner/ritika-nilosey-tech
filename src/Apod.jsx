import { useEffect, useState, Suspense } from 'react'
import getPromiseToFetchUrl from './getPromiseToFetchUrl';

export function ApodSuspenseWrapper() {
  const urlToApod = getPromiseToFetchUrl('https://api.nasa.gov/planetary/apod?api_key=fVyaH1PohPwlzCJOr4QRa45MbA4xcLj16lJ7VSIL');
    
  return (
    <Suspense fallback={<div>Loading Your Astronomy Picture of the Day! ...</div>}>
      <Apod resource={urlToApod}/>
    </Suspense>
  )
}

export function Apod({resource}) {
  return (
    <div className='apod-image'>
      <img src={resource}></img>
    </div>
  )
}

export default ApodSuspenseWrapper
