import { BrowserRouter, Route, Routes } from "react-router-dom";

import StudentList from "./Components/StudentList";
import FavStudentList from "./Components/FavStudentList";
import StudentArrContext from "./Components/StudentArrContext";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <StudentArrContext>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/FavouriteStudents" element={<FavStudentList />} />
        </Routes>
      </StudentArrContext>

    </BrowserRouter>
  );
}

export default App;
