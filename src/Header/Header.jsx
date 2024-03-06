import "./Header.css"

export const Header = () => {
    let headerObject = {
       headerText: "Music Releases Project",
    }
    return(
        <header>
            <h1>{headerObject.headerText}</h1>
        </header>
        
    ) 
}
