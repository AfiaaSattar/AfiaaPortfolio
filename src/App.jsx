
import { Routes, Route } from "react-router-dom";
import CredentialsPage from "./components/CredentialsPage.jsx";
import Portfolio from "./components/Portfolio.jsx";
export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/credentials" element={<CredentialsPage />} />
    </Routes>
  );
}