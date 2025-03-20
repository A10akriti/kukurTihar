import { useState, useEffect } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({ totalEvents: 0 });

  useEffect(() => {
    fetch("http://localhost:3005/api/dashboard")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

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
