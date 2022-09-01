import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JwCard from "./JwCard";
import "../css/ImageContainers.css";
import jwstApiSearch from "../actions/jwstApiSearch";

export default function JwContainer() {
  const dispatch = useDispatch();
  const jwImageResults = useSelector((state) => state.jwst.jwImageResults);
  useEffect(() => {
    jwstApiSearch(dispatch);
  }, []);
  return (
    <div className="jw-container">
      {jwImageResults?.map((result) => (
        <JwCard key={result.id} result={result} />
      ))}
    </div>
  );
}
