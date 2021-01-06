import React from "react";
import "./style.css";
import bulba1 from "../../images/bulbasaur-1.png";

const Header = (props) => {
    const reset = () => {
        props.resetGame();
    };

    return (
        <div className="header-container">
            <div className="pokeballs-counter-container">
                <label>Pokeballs</label>
                <label>{props.pokeballs}</label>
            </div>

            <div className="bulba-container">
                <img
                    src={bulba1}
                    onClick={() => alert("Stop poking me!!!")}
                ></img>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Header;
