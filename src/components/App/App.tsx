import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";
import AddFormPage from "../../pages/AddFormPage/AddFormPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/films" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/add-form" element={<AddFormPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
