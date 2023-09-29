import { Routes, Route } from "react-router-dom";
import { SigIn } from "./screens/SignIn/SigIn";
import { Home } from "./screens/Home/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SigIn />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
