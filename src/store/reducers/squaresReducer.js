const initialState = {
    squares: [
        { id: "R0C0", bomb: false, number: 0 },
        { id: "R0C1", bomb: false, number: 0 },
        { id: "R0C2", bomb: false, number: 0 },
        { id: "R1C0", bomb: false, number: 0 },
        { id: "R1C1", bomb: false, number: 0 },
        { id: "R1C2", bomb: false, number: 0 },
        { id: "R2C0", bomb: false, number: 0 },
        { id: "R2C1", bomb: false, number: 0 },
        { id: "R2C2", bomb: false, number: 0 },
    ],
};

const squaresReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REFRESH_SQUARES": {
            return action.payload;
        }

        case "ADD_BOMB":
            return {
                ...state,
                squares: state.squares.map((item) => {
                    if (item.id === action.payload) {
                        return { id: item.id, bomb: true };
                    } else {
                        return item;
                    }
                }),
            };
        case "ADD_NUMBER":
            return state;
        default:
            return state;
    }
};

export default squaresReducer;
