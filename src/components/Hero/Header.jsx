import "./hero.css";

export const Header = () => {
    // Functional component that displays a text above the hero image, which is inserted through the class hero-image via CSS.
    return (
        <div className="hero">
            <h1 className="hero-text">New albums & singles</h1>
            <p className="hero-text">Project by Laura Lyckholm</p>
        </div>
    );
}