import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../src/style.css';

import Left_Nav from "./Components/Sidebar";
import Home from "./Web Pages/Home Page";
import Events_D365 from "./Web Pages/Event";
import PCF from "./Web Pages/PCF/PCF";
import RoadMap from "./Web Pages/PCF/RoadMap";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>

        <Left_Nav />

        <div style={{ padding: "20px", flex: 1, height: "100vh", overflow: "scroll" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events_D365" element={<Events_D365 />} />
            <Route path="/PCF" element={<PCF />} />
            <Route path="RoadMap" element={<RoadMap />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;