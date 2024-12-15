import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
