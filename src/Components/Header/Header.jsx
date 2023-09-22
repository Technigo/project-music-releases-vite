import React from "react";
import styling from './Header.module.css';

const Header = () => {
    return (
        <header className={styling.header}>
            <span className={styling.h1}>New Albums & Singles</span>
            <span className={styling.p}>Elbine</span>
        </header>
    );
}

export default Header;

