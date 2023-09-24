import "./Description.css";

export const Description = ({ playlistDescription }) => {
  return (
    <div className="description">
      <p className="p-card preview-text">{playlistDescription.description}</p>
    </div>
  );
};
