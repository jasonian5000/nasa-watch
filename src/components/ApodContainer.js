import React, { useEffect } from "react";
import ApodCard from "./ApodCard";
import { useDispatch, useSelector } from "react-redux";
import "../css/ImageContainers.css";
import apodApiSearch from "../actions/apodApiSearch";

export default function ApodContainer() {
  const dispatch = useDispatch();
  const apodImageResults = useSelector(
    (state) => state?.apod?.apodImageResults
  ).filter((result) => result?.media_type === "image");
  useEffect(() => {
    apodApiSearch(dispatch);
  }, []);
  return (
    <div className="apod-container">
      {apodImageResults?.map((result) => (
        <ApodCard key={result?.date} result={result} />
      ))}
    </div>
  );
}
