import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { LayoutDashboardIcon, SettingsIcon, UserPenIcon } from "lucide-react";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Navbar />
      <main className="container ">
        <div className="w-full flex gap-10 ">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<Dashboard userData={userData} />} // Pass userData correctly
            />
            <Route
              path="/profile"
              element={<Profile setUserData={setUserData} />} // Pass setUserData to Profile
            />
            <Route
              path="/settings"
              element={<div>Settings Page</div>}
            />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
