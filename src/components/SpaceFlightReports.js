import React from 'react'
import { useSelector } from "react-redux";
import ReportCard from "./ReportCard";

export default function SpaceFlightReports() {
      const spaceFlightReportsResults = useSelector(
        (state) => state.nasa.spaceFlightReportsResults
      );
      return (
        <div className="space-flight-reports">
          {spaceFlightReportsResults?.map((result) => (
            <ReportCard key={result.id} result={result} />
          ))}
        </div>
      );
}
