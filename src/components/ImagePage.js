import React from 'react'
import ApodContainer from "./ApodContainer";
import JwContainer from "./JwContainer";
import NasaContainer from "./NasaContainer";
import SearchBar from "./SearchBar";
import "../css/ImagePage.css"

export default function ImagePage() {
  return (
    <div className="image-page">
      <SearchBar />
      <div className="image-column-heading">
        <h1 className="page-title apod-title">ASTRONOMY PICTURE OF THE DAY</h1>
        <h1 className="page-title nasa-title">NASA IMAGES</h1>
        <h1 className="page-title jw-title">JAMES WEBB IMAGES</h1>
      </div>
      <div className="image-columns">
        <ApodContainer />
        <NasaContainer />
        <JwContainer />
      </div>
    </div>
  );
}
