//null changes according to search input - get replaced
export const initialState = {
    term: null,
}

//dispatch action - change data layer - after entering input and press enter
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        default:
            return state;
    }
};

export default reducer;