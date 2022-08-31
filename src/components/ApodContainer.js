import React from "react";
import ApodCard from "./ApodCard";
import { useSelector } from "react-redux";
import shuffleArray from "../actions/shuffleArray";
import "../css/ImageContainers.css"

export default function ApodContainer() {
  const apodImageResults = shuffleArray(
    useSelector((state) => state.nasa.apodImageResults)
  ).filter(result => result.media_type === "image")
  return (
    <div className="apod-container">
      {apodImageResults?.map((result) => (
        <ApodCard key={result.date} result={result} />
      ))}
    </div>
  );
}
