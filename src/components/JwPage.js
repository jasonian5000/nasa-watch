import React from "react";
import { useSelector } from "react-redux";
import JwImage from "./JwImage";

export default function JwPage() {
    const jamesWebbImages = useSelector((state) => state.nasa.jamesWebbImages)
  return (
    <div className="jw-page">
      <h1>James Webb Images</h1>
      {jamesWebbImages?.map((result) => (
        <JwImage key={result.id} result={result}/>
      ))}
    </div>
  );
}
