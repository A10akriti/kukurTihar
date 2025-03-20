import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "../adminLogin";
import Dashboard from "./dashboard";
import EventManagement from "./eventManagement";
import ProtectedRoutes from "../../Routes/ProtectedRoutes"; 

const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          } 
        />
        
        <Route 
          path="/admin/events" 
          element={
            <ProtectedRoutes>
              <EventManagement />
            </ProtectedRoutes>
          } 
        />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
