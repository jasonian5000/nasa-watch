import React from 'react'

export default function NasaImage({ result }) {
  return (
    <div className='nasa-image-card'>
      <p>{result.data[0].title}</p>
      <img src={result.links[0].href}  alt=""/>
    </div>
  );
}
