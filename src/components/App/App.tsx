import HomePage from "../pages/HomePage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
