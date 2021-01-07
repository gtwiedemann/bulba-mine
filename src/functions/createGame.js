import * as general from "./general.js";

export const createSquaresArray = (size) => {
    let squareArray = [];

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            squareArray.push({
                id: `R${i}C${j}`,
                row: i,
                column: j,
                mine: false,
                number: 0,
            });
        }
    }
    return squareArray;
};

export const insertMines = (arr, totalMines) => {
    let squareArray = arr;
    let minesLeft = totalMines;
    let randomIndex = 0;
    while (minesLeft > 0) {
        randomIndex = general.getRandomInt(0, arr.length);
        if (!squareArray[randomIndex].mine) {
            if (Math.random() > 0.5) {
                squareArray[randomIndex].mine = true;
                minesLeft--;
            }
        }
    }
    return squareArray;
};

const findSquareInPosition = (arr, row, column) => {
    let foundIndex = 0;
    arr.forEach((item, index) => {
        if (item.row === row && item.column === column) {
            foundIndex = index;
        }
    });
    return foundIndex;
};

export const insertNumbers = (arr) => {
    let squareArray = arr;
    let row;
    let column;
    let bombsFound = 0;
    let offSetRow = 0;
    let offSetColumn = 0;

    squareArray.forEach((element) => {
        row = element.row;
        column = element.column;
    });
};

export const insertNumber = (arr, row, column, offSetRow, offSetColumn) => {
    let bombFound = 0;
    if (row - 1 > 0 && column - 1 > 0) {
        if (arr[findSquareInPosition(arr, row - 1, column - 1)].mine) {
            bombFound++;
        }
    }
    return bombFound;
};
// if (squareArray[])
// return squareArray;
