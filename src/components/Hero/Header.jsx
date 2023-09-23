import "./hero.css";

export const Header = () => {
    // Functional component that displays a text above the hero image, which is inserted via CSS.
    return (
        <>
            <h1 className="hero-text">Music releases</h1>
            <p className="hero-text">Project by Laura Lyckholm</p>
        </>
    );
}