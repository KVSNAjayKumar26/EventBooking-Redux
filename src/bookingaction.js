export const BOOK_TICKET = 'BOOK_TICKET';
export const CONFIRM_BOOKING = 'CONFIRM_BOOKING';

export const bookTicket = (bookingDetails) => ({
    type: BOOK_TICKET,
    payload: bookingDetails,
});

export const confirmBooking = (confirmation) => ({
    type: CONFIRM_BOOKING,
    payload: confirmation,
});