import React, { useState } from "react";

export default function ApodImage({ result }) {
    const [flip, setFlip] = useState(true)
  return (
    <div onClick={() => setFlip(!flip)} className="apod-image-card">
      <p>{flip ? result?.title: result?.explanation}</p>
      <img src={flip ? result?.url : ""} alt="" />
    </div>
  );
}
