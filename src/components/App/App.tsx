import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/films" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/films" />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
