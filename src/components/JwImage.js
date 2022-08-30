import React from 'react'

export default function JwImage({result}) {
  return (
    <div className='jw-image-card'>
      <img src={result?.location} alt=""/>
    </div>
  )
}
