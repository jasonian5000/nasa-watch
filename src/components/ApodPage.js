import React from "react";
import ApodImage from "./ApodImage";
import { useSelector } from "react-redux";
import shuffleArray from "../actions/shuffleArray";

export default function ApodPage() {
  const apodImage = shuffleArray(
    useSelector((state) => state.nasa.apod100)
  ).filter(result => result.media_type === "image")
  return (
    <div className="apod-page">
      {apodImage?.map((result) => (
        <ApodImage key={result.date} result={result} />
      ))}
    </div>
  );
}
