import "./App.css";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Phone from "./pages/Phone";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Phone />} />
        <Route path={"/error"} element={<Error />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
