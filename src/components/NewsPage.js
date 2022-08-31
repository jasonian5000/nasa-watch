import React from "react";
import SpaceFlightNews from "./SpaceFlightNews";
import "../css/NewsPage.css";
import SpaceFlightReports from "./SpaceFlightReports";

export default function NewsPage() {
  return (
    <div className="news-page">
      <div className="column-heading">
        <h1 className="page-title reports">DAILY ISS REPORTS</h1>
        <h1 className="page-title news">SPACE FLIGHT NEWS</h1>
      </div>
      <div className="news-column">
        <SpaceFlightReports />
        <SpaceFlightNews />
      </div>
    </div>
  );
}
