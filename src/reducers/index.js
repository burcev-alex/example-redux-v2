export const initialState = {
    user: {
        login: "",
        pass: ""
    }
};

export function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
