import style from './AlbumName.module.css';

export const AlbumName = ({ name, url }) => {
  console.log('AlbumName');
  return (
    <p className={style.title}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </p>
  );
};

