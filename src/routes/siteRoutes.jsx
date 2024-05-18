import Profile from "../components/profile";
import About from "../components/about";
import { Route, Routes } from "react-router-dom";
export default function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
