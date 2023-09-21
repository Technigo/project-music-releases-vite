
export const Artists = ({ name, artistURL }) => {
    console.log(`the url for the artist is this: ${artistURL}`);
    return (
        <a className="artists-names" href="{artistURL}">
            {name}</a>
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