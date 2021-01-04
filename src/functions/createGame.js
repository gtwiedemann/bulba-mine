export const createSquares = (size) => {
    let rowArray = [];
    let squareArray = [];
    for (let i = 0; i <= size; i++) {
        squareArray = [];
        for (let j = 0; j <= size; j++) {
            squareArray.push(<Square key={`R${i}C${j}`} id={`R${i}C${j}`} />);
        }
        rowArray.push(<div className="row-container">{squareArray} </div>);
    }

    return rowArray;
};
