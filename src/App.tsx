import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/authPage";
import DashboardPage from "./pages/dashboardPages";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
