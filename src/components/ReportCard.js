import React from 'react'
import convertDate from '../actions/convertDate';
import "../css/Cards.css"

export default function ReportCard({result}) {
  let date = convertDate(result?.publishedAt)
  return (
    <div className="card-container report-card">
      <h3>{date}</h3>
      <p>
        {result?.summary}
        <a
          className="news-link"
          target="_blank"
          rel="noreferrer"
          href={result?.url}
        >
          more
        </a>
      </p>
    </div>
  );
}
