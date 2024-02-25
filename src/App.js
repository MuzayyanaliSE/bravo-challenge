import { Navigate, Route, Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import UserProfile from "./Components/UserProfile";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
        <Route path="/" element={<Navigate to={'/users-list'} />} />

          <Route path="/users-list" element={<UserList />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
