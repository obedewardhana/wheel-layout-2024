import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export const RoutesMaker = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

