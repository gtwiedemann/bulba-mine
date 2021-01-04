import React from "react";
import "./style.css";

const Square = (props) => {
    const squareClick = (e) => {
        alert(e.target.id);
    };

    return (
        <div
            className="square-container"
            id={props.id}
            onClick={squareClick}
        ></div>
    );
};

export default Square;
