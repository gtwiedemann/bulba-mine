import React from "react";
import "./App.css";
import Square from "./components/square/Square.jsx";
import * as funcs from "./functions/createGame.js";
import Header from "./components/header/Header.jsx";

function App() {
    const [squaresData, setSquaresData] = React.useState([]);
    const [counterPokeballs, setcounterPokeballs] = React.useState(50);

    const setPokeball = (e) => {
        setcounterPokeballs(counterPokeballs - 1);
    };

    const removePokeball = (e) => {
        setcounterPokeballs(counterPokeballs + 1);
    };

    const resetGame = () => {
        setSquaresData([]);
        setcounterPokeballs(50);
        setSquaresData(funcs.createSquaresDataArray(12));
        console.log("reset");
    };

    React.useEffect(() => {
        setSquaresData(funcs.createSquaresDataArray(12));
    }, []);

    return (
        <div className="App">
            <div>
                <div className="header-container">
                    <Header
                        pokeballs={counterPokeballs}
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
