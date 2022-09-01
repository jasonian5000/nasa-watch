import convertDate from "../actions/convertDate";
import "../css/Cards.css";

export default function NewsCard({ result }) {
  let date = convertDate(result?.publishedAt);
  return (
    <div className="card-container news-card">
      <a
        className="card-button news-link"
        target="_blank"
        rel="noreferrer"
        href={result?.url}
      >
        <h3 className="card-title news-title">
          {result?.title}
          <b></b>
          {date}
        </h3>
        <img src={result?.imageUrl} alt="" />
      </a>
    </div>
  );
}