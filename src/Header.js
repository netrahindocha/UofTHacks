import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="header">

<div className="logoSection">
    <p id="title">TIME MACHINE</p>
</div>

<nav>
    <ul>
        <li>
            <Link to="/">PhotoBooth</Link>
        </li>
        <li>
            <Link to="/album">Album</Link>
        </li>
    </ul>
</nav>

<div className="userUtils">
    <i className="fa-solid fa-user"></i>
</div>
</div>
        </>
    )
}

export default Header;