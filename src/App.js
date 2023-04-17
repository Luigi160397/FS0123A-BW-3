import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
