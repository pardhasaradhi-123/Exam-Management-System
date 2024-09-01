import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Client dashboard/Home";
import Layout from "./Client dashboard/Layout";
import Exam from "./Client dashboard/Exam";
import ExamSchedule from "./Client dashboard/ExamSchedule";
import Login from "./Client dashboard/Login";
import AdminLayout from "./Admin dashboard/AdminLayout";
import AdminPanel from "./Admin dashboard/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/student/exam-details" element={<Exam />} />
          <Route path="/student/exam-shedule" element={<ExamSchedule />} />
        </Route>
        <Route path="/admin-dashboard" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
