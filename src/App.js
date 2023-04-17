import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
