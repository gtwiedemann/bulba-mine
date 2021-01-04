import React from "react";
import "./App.css";
import Square from "./components/square/Square.jsx";

function App() {
    const [squaresData, setSquaresData] = React.useState([]);

    const createSquares = (size) => {
        let rowArray = [];
        let squareArray = [];
        for (let i = 0; i <= size; i++) {
            squareArray = [];
            for (let j = 0; j <= size; j++) {
                squareArray.push(
                    <Square key={`R${i}C${j}`} id={`R${i}C${j}`} />
                );
            }
            rowArray.push(<div className="row-container">{squareArray} </div>);
        }

        setSquares(rowArray);
    };

    React.useEffect(() => {
        createSquares(18);
    }, []);

    const [squares, setSquares] = React.useState([]);

    return (
        <div className="App">
            <div className="screen-container">{squares}</div>
        </div>
    );
}

export default App;
