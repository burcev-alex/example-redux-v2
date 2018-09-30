export const initialStat = {
    user: {
        id: 1,
        name: "Vasya Pupkin"
    }
};

export function rootReducers(state = initialStat, action) {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}
