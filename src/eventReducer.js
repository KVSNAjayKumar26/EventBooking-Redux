import { FETCH_EVENTS, SELECT_EVENT } from "./eventactions";


const initialState = {
    events: [],
    selectedEvent: null,
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS:
            return { ...state, events: action.payload };
        case SELECT_EVENT:
            return { ...state, selectedEvent: action.payload };
        default:
            return state;
    }
};

export default eventReducer;