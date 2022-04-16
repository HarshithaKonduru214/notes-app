import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home, Main } from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Main />} />
      </Routes>
      
    </div>
  );
}

export default App;
