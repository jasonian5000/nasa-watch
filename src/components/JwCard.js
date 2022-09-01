import React from "react";
import "../css/Cards.css";

export default function JwCard({ result }) {
  return (
    <div className="card-container">
      <button
        className="card-button"
        onClick={() => window.open(result?.location, "_blank")}
      >
        <div className="card-front">
          <div className="front-panel">
            <img src={result?.location} alt="" />
          </div>
        </div>
      </button>
    </div>
  );
}
