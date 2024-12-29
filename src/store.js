import { combineReducers, createStore } from "redux";
import eventReducer from './eventReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    bookings: bookingReducer,
});

const store = createStore(rootReducer);

export default store;