import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'

export default function SpaceFlightNews() {
    const spaceFlightNews = useSelector((state) => state.nasa.spaceFlightNews)
  return (
    <div className='space-flight-news'>SpaceFlightNews
        {spaceFlightNews?.map((result) => (
            <NewsCard key={result.id} result={result} />
        ))}
    </div>
  )
}
