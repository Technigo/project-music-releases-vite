//The AlbumName Component takes a prop called name (AlbumName) and renders the name prop enclosed in a span element.

const AlbumName = ({ name }) => {
    return (<span className='albumName'>{name}</span>
    );
};

//Export component
export default AlbumName

