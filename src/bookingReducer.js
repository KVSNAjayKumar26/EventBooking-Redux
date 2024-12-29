import { BOOK_TICKET, CONFIRM_BOOKING } from "./bookingaction";


const initialState = {
    bookings: [],
    confirmation: null,
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_TICKET:
            return { ...state, bookings: [...state.bookings, action.payload] };
        case CONFIRM_BOOKING:
            return { ...state, confirmation: action.payload };
        default:
            return state;
    }
};

export default bookingReducer;