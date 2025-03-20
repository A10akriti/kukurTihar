import axios from "axios";
import { useState, useEffect } from "react";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", date: "", location: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `http://localhost:3005/api/events/${editingId}` : "http://localhost:3005/api/events";

    try {
      await axios({
        method,
        url,
        headers: { "Content-Type": "application/json" },
        data: formData,
      });

      setFormData({ title: "", description: "", date: "", location: "" });
      setEditingId(null);
      fetchEvents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (event) => {
    setFormData(event);
    setEditingId(event._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>

      <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow-md">
        <input
          type="text"
          placeholder="Event Title"
          className="w-full p-2 mb-2 border rounded"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Event Description"
          className="w-full p-2 mb-2 border rounded"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="date"
          className="w-full p-2 mb-2 border rounded"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 mb-2 border rounded"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          {editingId ? "Update Event" : "Add Event"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event._id} className="border p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <p className="text-sm text-gray-600">📍 {event.location}</p>
            <p className="text-sm text-gray-600">📅 {new Date(event.date).toDateString()}</p>
            <div className="mt-2 flex gap-2">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => handleEdit(event)}>Edit</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(event._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventManagement;
