import React from 'react'
import ApodPage from "./ApodPage";
import JwPage from "./JwPage";
import NasaPage from "./NasaPage";
import SearchBar from "./SearchBar";

export default function ImagePage() {
  return (
    <div className="image-page">
      <SearchBar />
      <div className="image-column-heading">
        <h1 className="page-title">ASTRONOMY PICTURE OF THE DAY</h1>
        <h1 className="page-title">NASA IMAGES</h1>
        <h1 className="page-title">JAMES WEBB IMAGES</h1>
      </div>
      <div className="image-columns">
        <ApodPage />
        <NasaPage />
        <JwPage />
      </div>
    </div>
  );
}
