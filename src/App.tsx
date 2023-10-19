import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Calendar from "./page/calendar/Calendar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
