import data from "./data.json";
import Album from "./components/Album";

console.log(data);

export const App = () => {
    return (
        <>
            <h1 className="header header-top">
                New Albums & Singles
            </h1>

            <p className="header header-bottom">
                Technigo Education Team
            </p>

            <div className="grid">
                {data.albums.items.map((album) => (
                    // Render each album as a component
                    <Album
                        key={album.id}
                        name={album.name}
                        externalUrl={album.external_urls.spotify}
                        // Choose the first image (the largest one) in the array.
                        coverImage={album.images[0].url}
                        // Get only the relevant info for each artist
                        artists={album.artists.map((artist) => ({
                            id: artist.id,
                            name: artist.name,
                            externalUrl: artist.external_urls.spotify,
                        }))}
                    />
                ))}
            </div>
        </>
    );
};
