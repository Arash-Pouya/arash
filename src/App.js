import "./App.css";
import Tollbar from "./container/header/toolbar/Tollbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Persian from "./components/En.Fa/Persian";
import Button from "./components/UI/button/Button";
import Homepage from "./pages/Homepage";
import Aboutme from "./pages/Aboutme";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tollbar />
        <Routes>
          <Route exact strict path="/" element={<Homepage />} />
          <Route exact strict path="/aboutme" element={<Aboutme />} />
          <Route exact strict path="/homepage" element={<Button />} />
          {/* <Route path="" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
