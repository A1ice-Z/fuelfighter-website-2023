const Position = ({ title, description }) => {
    return (
      <div className="vacancy primaryColor">
        <h2>{title ? title: "error"}</h2>
        <p style={{textAlign: 'justify'}}>{description}</p>
      </div>
    );
  };

export default Position;