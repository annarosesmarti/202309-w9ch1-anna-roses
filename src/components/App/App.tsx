import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/films" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/films" />} />
      </Routes>
    </div>
  );
};

export default App;
