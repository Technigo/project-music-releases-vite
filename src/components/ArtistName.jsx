export const ArtistName = ({ names, urls }) => {
  return (
    <>
      <p>
        {names.map((name, index) => (
          <>
            {index > 0 && (index === names.length - 1 ? " & " : ", ")}
            <a key={name} href={urls[index]}>
              {name}
            </a>
          </>
        ))}
      </p>
    </>
  );
};
