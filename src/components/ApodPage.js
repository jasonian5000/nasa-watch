import React from "react";
import ApodImage from "./ApodImage";
import { useSelector } from "react-redux";
import shuffleArray from "../actions/shuffleArray";
import jwstApiSearch from "../actions/jwstApiSearch";

export default function ApodPage() {
  const apodImage = shuffleArray(
    useSelector((state) => state.nasa.apod100)
  ).filter(result => result.media_type === "image")
  return (
    <div className="apod-page">
      <h1>Astronomy Picture of the Day</h1>
      {apodImage?.map((result) => (
        <ApodImage key={result.date} result={result} />
      ))}
    </div>
  );
}
