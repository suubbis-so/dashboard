import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./section/sidebar";
import Navbar from "./section/navbar";
import Main from "./section/main";
import ChartSection from "./section/ChartSection";
import DataTable from "./section/datatable";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar is always displayed */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 bg-[#DDE1E6]">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/overview" />} // Default redirect to overview
            />

            <Route
              path="*"
              element={
                <>
                  {/* Navbar is always displayed */}
                  <Navbar
                    showDatePicker={window.location.pathname === "/tasks"} // Show date picker only on tasks
                  />

                  {/* Main Routes */}
                  <Routes>
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/admin" element={<Admin />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Components for the routes
const Overview = () => (
  <>
    <Main />
    <ChartSection />
  </>
);

const Tasks = () => <DataTable />;
const Documents = () => <div>Documents Content</div>;
const Team = () => <div>Team Content</div>;
const Reports = () => <div>Reports Content</div>;
const Admin = () => <div>Admin Content</div>;

export default App;
