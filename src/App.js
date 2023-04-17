import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Sidebar />
        <Routes>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
