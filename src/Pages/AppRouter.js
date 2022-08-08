import { BrowserRouter, Routes, Route } from "react-router-dom";
import Group from "./Group";
import Bills from "./Bills";
import Personal from "./Personal";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function AppRouter() {
  return (
    <div className="navigation">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/group" element={<Group />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
