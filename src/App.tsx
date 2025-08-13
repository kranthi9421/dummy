import { Routes, Route } from "react-router-dom";
import Hayu from "./pages/Hayu";
import Budda from "./pages/Budda";
import Brothers from "./pages/Brothers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hayu />} />
      <Route path="/mickey" element={<Budda />} />
      <Route path="/brothers" element={<Brothers />} />
    </Routes>
  );
}

export default App;
