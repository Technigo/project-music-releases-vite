
export const Artists = ({ name, artistURL, id }) => {
    console.log(`the url for the artist is this: ${artistURL}`);
    console.log(typeof artistURL);
    return (
        <a
            target="_blank"
            className="artists-names"
            href={artistURL}
            key={id}
            rel="noreferrer noopener"
        >
            <p className="artist-name">
            </p>
            {name}
        </a>
    )
}
Artists.defaultProps = {
    name: "No name information available",
    artistUrl: "No Url available",
};


// const Artists = (props) => {

//     return (
//         props.artistsURL.map((item, index) => {
//           return (
//             <a className="card-artists" href={item} key={props.name[index]}>
//               {props.name[index]}
//             </a>
//           )
//         })
//     )
//   }