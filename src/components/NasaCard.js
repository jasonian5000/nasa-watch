import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../css/Cards.css";

export default function NasaCard({ result }) {
  const [flipped, setFlipped] = useState(false);
  const flip = () => {
    setFlipped(!flipped);
  };
  const imageLink = result?.links[0]?.href;
  return (
    <div className="card-container">
      <button
        className="card-button"
        onMouseEnter={() => flip()}
        onMouseLeave={() => flip()}
        onClick={() => window.open(imageLink?.replace("thumb", "orig"), '_blank')}
      >
        <CSSTransition
          in={!flipped}
          timeout={1000}
          classNames="front-face-transition"
        >
          <div className="card-front">
            <div className="front-panel">
              <h3 className="card-title">{result?.data[0]?.title}</h3>
              <img src={imageLink} alt="" />
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={flipped}
          timeout={1000}
          classNames="back-face-transition"
        >
          <div className="card-back">
            <div className="card-desc">
              <p>
                {result.data[0].description_508
                  ? result.data[0].description_508
                  : "No description available"}
              </p>
            </div>
          </div>
        </CSSTransition>
      </button>
    </div>
  );
}
