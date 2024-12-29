export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SELECT_EVENT = 'SELECT_EVENT';

export const fetchEvents = (events) => ({
    type: FETCH_EVENTS,
    payload: events,
});

export const selectEvent = (eventId) => ({
    type: SELECT_EVENT,
    payload: eventId,
});