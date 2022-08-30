import React from "react";
import { useSelector } from "react-redux";
import shuffleArray from "../actions/shuffleArray";
import JwImage from "./JwImage";

export default function JwPage() {
  const jamesWebbImages = shuffleArray(
    useSelector((state) => state.nasa.jamesWebbImages)
  );
  return (
    <div className="jw-page">
      {jamesWebbImages?.map((result) => (
        <JwImage key={result.id} result={result} />
      ))}
    </div>
  );
}
