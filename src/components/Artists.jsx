
export const Artists = ({ name, artistURL, id, album }) => {

    // I think the fact that name is a string is why I can't work our how to add a comma
    console.log(typeof name);
    console.log(name);
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