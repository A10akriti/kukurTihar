import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Table, Button, Modal, Form, Input, message } from "antd";
import "antd/dist/reset.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  // Fetch all events
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/events/all"); // Adjust URL if needed
      setEvents(data.data);
    } catch (error) {
      message.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  // Open modal for adding or editing an event
  const handleOpenModal = (event = null) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  // Handle deleting an event
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/events/delete/${id}`);
      message.success("Event deleted successfully");
      fetchEvents();
    } catch (error) {
      message.error("Failed to delete event");
    }
  };

  // Handle form submission for creating/updating events
  const handleSubmit = async (values) => {
    try {
      if (currentEvent) {
        // Update existing event
        await axios.patch(`/api/events/update/${currentEvent._id}`, values);
        message.success("Event updated successfully");
      } else {
        // Create new event
        await axios.post("/api/events", values);
        message.success("Event created successfully");
      }
      setIsModalOpen(false);
      fetchEvents();
    } catch (error) {
      message.error("Failed to save event");
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            type="link"
            onClick={() => handleOpenModal(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <Button
        type="primary"
        onClick={() => handleOpenModal()}
        style={{ marginBottom: "20px" }}
      >
        Add Event
      </Button>
      <Table
        columns={columns}
        dataSource={events}
        rowKey="_id"
        loading={loading}
      />

      {/* Modal for Add/Edit Event */}
      <Modal
        title={currentEvent ? "Edit Event" : "Add Event"}
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          initialValues={currentEvent || {}}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Event name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Event description is required" }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Event date is required" }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentEvent ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
