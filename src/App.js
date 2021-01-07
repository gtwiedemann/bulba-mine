import React from "react";
import "./App.css";
import Square from "./components/square/Square.jsx";
import * as funcs from "./functions/createGame.js";
import Header from "./components/header/Header.jsx";
import bimage from "./images/bulbasaur-1.png";

function App() {
    const [squaresData, setSquaresData] = React.useState([]);
    const [totalMines, setTotalMines] = React.useState(50);
    const [mineCounter, setMineCounter] = React.useState(50);

    const setPokeball = (e) => {
        setMineCounter(mineCounter - 1);
    };

    const removePokeball = (e) => {
        setMineCounter(mineCounter + 1);
    };

    const resetGame = () => {
        setMineCounter(50);
        let squareArray = [];
        squareArray = funcs.createSquaresArray(12);
        squareArray = funcs.insertMines(squareArray, totalMines);
        // squareArray = funcs.insertNumbers(squareArray);
        setSquaresData(squareArray);
        // setSquaresData(funcs.insertMines(squaresData, totalMines));
    };

    React.useEffect(() => {
        resetGame();
    }, []);

    return (
        <div className="App">
            <div>
                <div className="header-container">
                    <Header
                        pokeballs={mineCounter}
                        resetGame={resetGame}
                    ></Header>
                </div>
                <div className="screen-container">
                    {squaresData.map((item) => (
                        <Square
                            key={item.id}
                            id={item.id}
                            row={item.row}
                            column={item.column}
                            mine={item.mine}
                            number={item.number}
                            setPokeball={setPokeball}
                            removePokeball={removePokeball}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
