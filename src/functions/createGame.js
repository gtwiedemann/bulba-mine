import Square from "../components/square/Square.jsx";

export const createSquaresDataArray = (size) => {
    let squareArray = [];

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            squareArray.push({
                id: `R${i}C${j}`,
                row: i,
                column: j,
                bomb: false,
                number: 0,
            });
        }
    }

    return squareArray;
};

export const setPokeball = (id) => {};

export const openSquare = (id) => {};
