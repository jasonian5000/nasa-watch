import React from 'react'
import "../css/NotFound.css"

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className='not-found-title'>404</h1>
      <h1>That page does not exist.</h1>
      <p>
        Looks like you're lost in space. Use a link to come back
        to Earth.
      </p>
      <img
        className="not-found-img"
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893"
        alt=""
      />
    </div>
  );
}
