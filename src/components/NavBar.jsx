export const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <a href="#playlists"><li><button>Playlists</button></li></a>
                <a href="#singles"><li><button>Singles</button></li></a>
                <a href="#albums"><li><button>Albums</button></li></a>
            </ul>
        </div>
    );
};

NavBar.defaultProps = {
    header: "No header",
};