import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, selectEvent } from './eventactions';
import './EventList.css'; // Import the CSS file

const EventList = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);

    useEffect(() => {
        // Fetch events from an API or static data
        const eventsData = [
            { id: 1, name: 'Concert', date: '2023-10-01' },
            { id: 2, name: 'Theater', date: '2023-10-05' },
        ];
        dispatch(fetchEvents(eventsData));
    }, [dispatch]);

    const handleSelectEvent = (eventId) => {
        dispatch(selectEvent(eventId));
    };

    return (
        <div className="container">
            <h2>Available Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id} onClick={() => handleSelectEvent(event.id)}>
                        {event.name} - {event.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
