import axios from "axios";
import { useState, useEffect } from "react";

const Event = () => {
  const [events, setEvents] = useState([]);

 
  useEffect(()=>{
    getAllEvents()
  },[])
const getAllEvents = async()=>{
  try {
    const response = await axios.get("http://localhost:3005/api/getevent");
    console.log(response);
    setEvents(events)
  } catch (error) {
    throw new Error("There was an error getting your Event.");
  }
}

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events?.map((event) => (
          <div key={event._id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <p className="text-sm text-gray-600">📍 {event.location}</p>
            <p className="text-sm text-gray-600">📅 {new Date(event.date).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
