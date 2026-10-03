import './RatingBadge.css';

function RatingBadge({Source, value}) {
  return (
    <div className="rating-badge">
      <span className="rating-badge__value">{value}</span>
      <span className="rating-badge__source">{Source}</span>
    </div>
  );
}

export default RatingBadge;
