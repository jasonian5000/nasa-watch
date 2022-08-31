import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import "../css/NewsContainer.css"
import shuffleArray from '../actions/shuffleArray'

export default function SpaceFlightNews() {
    const spaceFlightNewsResults = shuffleArray(
      useSelector((state) => state.nasa.spaceFlightNewsResults)
    );
  return (
    <div className='space-flight-news'>
        {spaceFlightNewsResults?.map((result) => (
            <NewsCard key={result.id} result={result} />
        ))}
    </div>
  )
}