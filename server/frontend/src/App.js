import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register"
import HeaderPanel from "./components/Header/Header"
import DealersPanel from "./components/Dealers/Dealers"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPanel />} />
            <Route path="/register" element={<RegisterPanel/>} />
            <Route path="/header" element={<HeaderPanel />} />
            <Route path="/dealers" element={<DealersPanel/>} />
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;
