import React from "react";
import data from "./data.json";
import "./index.css";
console.log(data);

export const HeaderText = () => {
    console.log(HeaderText)
    return (
        <div className="HeaderText">
            <h1>Albums and Singles</h1>
            <h2>Latest Releases</h2>
        </div>
    )
}