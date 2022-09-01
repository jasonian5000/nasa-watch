import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import spaceFlightReportsApi from "../actions/spaceFlightReportsApi";
import ReportCard from "./ReportCard";

export default function SpaceFlightReports() {
  const dispatch = useDispatch()
  const spaceFlightReportsResults = useSelector(
    (state) => state.news.spaceFlightReportsResults
  );
  useEffect(() =>{
    spaceFlightReportsApi(dispatch)
  }, [])
  return (
    <div className="space-flight-reports">
      {spaceFlightReportsResults?.map((result) => (
        <ReportCard key={result?.id} result={result} />
      ))}
    </div>
  );
}
