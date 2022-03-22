import "./App.css";
import NavBar from "./containers/NavBar/NavBar";
import Home from "./containers/Home/Home";
import History from "./containers/History/History";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
