import React from "react";
import ApodPage from "./ApodPage";
import JwPage from "./JwPage";
import NasaPage from "./NasaPage";
// import { VariableSizeList as List } from "react-window";

export default function Homepage() {
  return (
    <div className="homepage">
      <ApodPage />
      <NasaPage />
      <JwPage />
    </div>
  );
}
