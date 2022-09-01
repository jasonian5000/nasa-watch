import React, { useEffect } from "react";
import NasaCard from "./NasaCard";
import { useDispatch, useSelector } from "react-redux";
import "../css/ImageContainers.css";
import nasaApiStarter from "../actions/nasaApiStarter";

export default function NasaContainer() {
  const dispatch = useDispatch()
  const nasaImageResults = useSelector(
    (state) => state?.nasa?.nasaImageResults?.collection?.items
  );
  useEffect(() => {
    nasaApiStarter(dispatch)
  }, []);
  return (
    <div className="nasa-container">
      {nasaImageResults?.map((result) => (
        <NasaCard key={result?.data[0]?.nasa_id} result={result} />
      ))}
    </div>
  );
}
