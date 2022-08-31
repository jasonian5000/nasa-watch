import React from 'react'
import NasaCard from "./NasaCard";
import { useSelector } from "react-redux";
import shuffleArray from '../actions/shuffleArray';
import "../css/ImageContainers.css";


export default function NasaContainer() {
  const nasaImageResults = shuffleArray(useSelector(
    (state) => state.nasa.nasaImageResults.collection.items
  ))
  return (
    <div className='nasa-container'>
      {nasaImageResults?.map((result) => (
        <NasaCard key={result.data[0].nasa_id} result={result} />
      ))}
    </div>
  );
}
