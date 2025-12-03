import LoginPanel from "./components/Login/Login";
import RegisterPanel from "./components/Register/Register";
import DealersPanel from "./components/Dealers/Dealers";
import HeaderPanel from "./components/Header/Header";
import Dealer from "./components/Dealers/Dealer"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealers" element={<DealersPanel />} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/header" element={<HeaderPanel />} />
    </Routes>
  );
}
export default App;
