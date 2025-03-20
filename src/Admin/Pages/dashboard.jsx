import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({ totalEvents: 0 });

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/dashboard");
      setStats(response.data);
    } catch (error) {
      throw new Error("There was an error getting your Dashboard data.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <p className="text-lg">📊 Total Events: {stats.totalEvents}</p>
      </div>
    </div>
  );
};

export default Dashboard;
