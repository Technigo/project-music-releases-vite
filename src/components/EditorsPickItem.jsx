export const EditorsPickItem = ({ pick }) => {
  return (
    <li className="editors-pick__list-item">
      <a href={pick.external_urls.spotify} target="_blank" rel="noreferrer">
        <img src={pick.images[0].url} alt="" />
        <div className="text">
          <strong className="name">{pick.name}</strong>
          <p className="owner">{pick.owner.display_name}</p>
        </div>
      </a>
    </li>
  );
};
