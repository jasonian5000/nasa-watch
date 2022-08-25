import React from 'react'

export default function NasaImage({ result }) {
  return (
    <div>
      <p>{result.data[0].nasa_id}</p>
      <img src={result.links[0].href}  alt=""/>
    </div>
  );
}
