import "../css/Cards.css"

export default function NewsCard({ result }) {
  return (
    <div className="card-container news-card">
      <a
        className="card-button news-link"
        target="_blank"
        rel="noreferrer"
        href={result?.url}
      >
        <h3 className="card-title">{result?.title}</h3>
        <img src={result?.imageUrl} alt="" />
      </a>
    </div>
  );
}
