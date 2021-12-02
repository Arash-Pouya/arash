import "./App.css";
import Tollbar from "./container/header/toolbar/Tollbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutme from "./pages/Aboutme";
import Example from "./pages/Example";
import ContanctMe from "./pages/ContanctMe";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tollbar />
        <Routes>
          <Route exact strict path="/" element={<Homepage />} />
          <Route exact strict path="/Aboutme" element={<Aboutme />} />
          <Route exact strict path="/Example" element={<Example />} />
          <Route exact strict path="/ContanctMe" element={<ContanctMe />} />
          {/* <Route path="" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
