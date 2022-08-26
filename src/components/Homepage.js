import React from 'react'
import { useSelector } from 'react-redux'
import NasaImage from './NasaImage'

export default function Homepage() {
  const nasaSearchResult = useSelector((state) => state.nasa.nasaSearchResult.collection.items)
  return (
    <div className='homepage'>
      {nasaSearchResult?.map((result) => (
        <NasaImage key={result.data[0].nasa_id} result={result} />
      ))}
    </div>
  );
}
