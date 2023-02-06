import './DegreeCard.css';

function DegreeCard(props) {
  const degree = props.degree;

  return (
    <div className="degree-card">
      {degree.logo_path && (
        <div className="card-img">
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              transform: 'scale(1.5)'
            }}
            src={degree.logo_path}
            alt={degree.alt_name}
          />
        </div>
      )}
      <div className="card-body" style={{ width: '100%' }}>
        <div className="body-header">
          <div className="body-header-title">
            <h2 className="card-title">{degree.institution}</h2>
            <h3 className="card-subtitle">{degree.subtitle}</h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration">{degree.duration}</h3>
          </div>
        </div>
        <div className="body-content">
          {degree.descriptions.map((bullet, idx) => {
            return (
              <p className="content-list" key={idx}>
                {bullet}
              </p>
            );
          })}
          {degree.school_url && (
            <a
              href={degree.school_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="visit-btn">
                <p className="btn">Visit Website</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default DegreeCard;
