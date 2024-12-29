import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookTicket, confirmBooking } from './bookingaction';

const BookingForm = () => {
    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) => state.events.selectedEvent);

    const handleBooking = (e) => {
        e.preventDefault();
        const bookingDetails = {
            eventId: selectedEvent,
            name: e.target.name.value,
            tickets: e.target.tickets.value,
        };
        dispatch(bookTicket(bookingDetails));
        dispatch(confirmBooking(`Booking confirmed for ${bookingDetails.tickets} tickets to event ID: ${selectedEvent}`));
    };

  return (
    <form onSubmit={handleBooking}>
        <h2>Book Tickets</h2>
        <input type='text' name='name' placeholder='Your Name' required />
        <input type='number' name='tickets' placeholder='Number of Tickets' required />
        <button type='submit'>Book Now</button>
    </form>
  );
};

export default BookingForm;