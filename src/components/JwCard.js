import React from "react";
import "../css/Cards.css"

export default function JwCard({ result }) {
  return (
    <div className="card-container">
      <div className="card-front">
        <div className="front-panel">
          <img src={result?.location} alt="" />
        </div>
      </div>
    </div>
  );
}
