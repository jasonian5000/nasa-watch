import React from 'react'
import "../css/Cards.css"

export default function ReportCard({result}) {
  return (
    <div className="card-container report-card">
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
