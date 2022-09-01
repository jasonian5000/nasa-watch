import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import "../css/NewsContainer.css";
import spaceFlightNewsApi from "../actions/spaceFlightNewsApi";

export default function SpaceFlightNews() {
  const dispatch = useDispatch()
  const spaceFlightNewsResults = useSelector(
    (state) => state.news.spaceFlightNewsResults
  );
  useEffect(() => {
    spaceFlightNewsApi(dispatch)
  }, [])
  return (
    <div className="space-flight-news">
      {spaceFlightNewsResults?.map((result) => (
        <NewsCard key={result.id} result={result} />
      ))}
    </div>
  );
}
