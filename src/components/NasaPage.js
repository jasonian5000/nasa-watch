import React from 'react'
import NasaImage from "./NasaImage";
import { useSelector } from "react-redux";
import shuffleArray from '../actions/shuffleArray';


export default function NasaPage() {
  const nasaSearchResult = shuffleArray(useSelector(
    (state) => state.nasa.nasaSearchResult.collection.items
  ))
  return (
    <div className='nasa-page'>
      {nasaSearchResult?.map((result) => (
        <NasaImage key={result.data[0].nasa_id} result={result} />
      ))}
    </div>
  );
}
