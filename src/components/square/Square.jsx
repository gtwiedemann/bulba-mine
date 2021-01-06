import React from "react";
import "./style.css";
import pokeball from "../../icons/pokeball-icon.png";
import empty from "../../icons/empty.png";

const Square = (props) => {
    const [marked, setMarked] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {}, [marked]);

    const squareStyle = {
        left: `${props.row * 40}px`,
        top: `${props.column * 40}px`,
    };

    const handleClick = (e) => {
        e.preventDefault();

        if (e.button === 0) {
            if (!marked && !open) {
                e.currentTarget.style.backgroundColor =
                    "rgba(100, 100, 100, .5)";
                setOpen(!open);
            }
        } else if (e.button === 2 && !open) {
            if (marked) {
                props.removePokeball();
                e.target.src = empty;
            } else {
                props.setPokeball();
                e.target.src = pokeball;
            }
            setMarked(!marked);
        }
    };

    return (
        <div
            onMouseUp={handleClick}
            className="square-container"
            style={squareStyle}
        >
            <img src={empty}></img>
        </div>
    );
};

export default Square;
