import React, { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [
      {
        id: 1,
        title: 'Hackathon 2025',
        date: '2025-02-28T05:00',
        location: 'BMS College Of Engineering, Bangalore',
        description: 'An electrifying coding marathon for innovators and tech enthusiasts!',
        image: '/images/1.png',
        price: 'Rs.150',
        followers: '7.2k',
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents(prevEvents => [...prevEvents, { ...event, id: prevEvents.length + 1 }]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

