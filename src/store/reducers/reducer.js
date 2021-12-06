const INITIAL_STATE = {
    Fav : [],
};

export default function Reducer(state = INITIAL_STATE , action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                Fav : [...state.Fav , action.payload],
            };

        case 'Delete':
            return {
                ...state,
                Fav : [action.payload],
            };

        default:
            return state;
    }
}