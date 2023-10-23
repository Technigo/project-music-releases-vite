import "./Header.css";

export const Header = () => {
    const headerText = "New releases and singles";
    return (
        <header>
            <h1>{headerText}</h1>
            <p>Hang Nguyen</p>
        </header>
    );
}