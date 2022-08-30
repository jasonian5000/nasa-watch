import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function NewsCard({ result }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card-container">
      <button className="card-button" onClick={() => setFlipped(!flipped)}>
        <CSSTransition
          in={!flipped}
          timeout={1000}
          classNames="front-face-transition"
        >
          <div className="card-front">
            <h3>{result?.title}</h3>
            <img className="news-card-img" src={result?.imageUrl} alt="" />
          </div>
        </CSSTransition>
        <CSSTransition
          in={flipped}
          timeout={1000}
          classNames="back-face-transition"
        >
          <div className="card-back">
            <p>{result?.summary}</p>
          </div>
        </CSSTransition>
      </button>
    </div>
  );
}
