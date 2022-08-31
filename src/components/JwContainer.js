import React from "react";
import { useSelector } from "react-redux";
import shuffleArray from "../actions/shuffleArray";
import JwCard from "./JwCard";
import "../css/ImageContainers.css";

export default function JwContainer() {
  const jwImageResults = shuffleArray(
    useSelector((state) => state.nasa.jwImageResults)
  );
  return (
    <div className="jw-container">
      {jwImageResults?.map((result) => (
        <JwCard key={result.id} result={result} />
      ))}
    </div>
  );
}
