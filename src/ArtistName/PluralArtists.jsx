import "./PluralArtists.css";

export const PluralArtists = ({ index, length }) => {
  if (index === length - 2) {
    return <span className="ampersand-space"> &amp; </span>;
  } else if (index < length - 2) {
    return <span className="comma-space">, </span>;
  }
  return "";
};
