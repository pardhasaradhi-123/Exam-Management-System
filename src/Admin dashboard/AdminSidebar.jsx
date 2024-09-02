import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaSignOutAlt,
  FaLaptopCode,
  FaCogs,
  FaBolt,
  FaBuilding,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AddQuestionsForm from "./AddQuestionsForm"; // Import the AddQuestionsForm component

const AdminSidebar = ({ onSelectDepartment }) => {
  const navigate = useNavigate();
  const [showDepartments, setShowDepartments] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showQuestionsForm, setShowQuestionsForm] = useState(false); // State to toggle the questions form

  const departments = [
    { name: "Computer Science", icon: <FaLaptopCode /> },
    { name: "Mechanical", icon: <FaCogs /> },
    { name: "Electrical", icon: <FaBolt /> },
    { name: "Civil", icon: <FaBuilding /> },
  ];

  const students = {
    "Computer Science": [
      "Alice",
      "Bob",
      "Charlie",
      "Adarsh",
      "Micky",
      "Deviprasad",
    ],
    Mechanical: ["Dave", "Eve", "Frank", "Bharath", "Naresh"],
    Electrical: ["Grace", "Heidi", "Ivan", "Sai", "Aravind"],
    Civil: ["Jack", "Ken", "Liam", "dileep", "Kattappa"],
  };

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    onSelectDepartment(department);
    setShowDepartments(true);
  };

  const handleDashboardClick = () => {
    setSelectedDepartment(null); // Hide students by resetting selected department
    onSelectDepartment(null);
    setShowDepartments(false); // Notify parent component to show dashboard
  };

  const handleQuestionsClick = () => {
    navigate("/set-questions");
  };

  return (
    <div
      className={`bg-indigo-50 h-full p-6 flex flex-col justify-between w-64 transition-all duration-300 fixed left-0 border-r z-10`}
    >
      <div>
        <div className="flex items-center mb-6">
          <FaLaptopCode
            className="text-3xl text-indigo-600 mr-3"
            aria-label="Exam Management System Icon"
          />
          <h2 className="text-2xl font-bold text-indigo-600 max-sm:hidden">
            Exam Management System
          </h2>
        </div>
        <ul className="mt-10">
          <li className="mb-6">
            <Link
              className="flex items-center text-lg text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 p-2 rounded transition duration-300"
              onClick={handleDashboardClick}
            >
              <FaHome className="mr-3" />
              <span className="hidden md:block">Dashboard</span>
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to={"/set-questions"}
              className="flex items-center text-lg text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 p-2 rounded transition duration-300"
              onClick={handleQuestionsClick}
            >
              <FaQuestionCircle className="mr-3" />
              <span className="hidden md:block">Questions</span>
            </Link>
          </li>
          <li className="mb-6">
            <Link
              className="flex items-center text-lg text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 p-2 rounded transition duration-300"
              onClick={() => setShowDepartments(!showDepartments)}
            >
              <FaBook className="mr-3" />
              <span className="hidden md:block">Departments</span>
            </Link>
          </li>
        </ul>
        {showDepartments && (
          <ul className="mt-10">
            {departments.map((dept) => (
              <li
                key={dept.name}
                className="mb-4 ml-4 cursor-pointer text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 p-2 rounded transition duration-300 flex items-center"
                onClick={() => handleDepartmentClick(dept.name)}
              >
                {dept.icon} <span className="ml-3">{dept.name}</span>
              </li>
            ))}
          </ul>
        )}
        {showQuestionsForm && (
          <div className="mt-10">
            <AddQuestionsForm />
          </div>
        )}
      </div>
      <Link to="/">
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-800 w-full flex items-center justify-center transition duration-300"
          aria-label="Log Out Button"
        >
          <FaSignOutAlt className="mr-3" aria-hidden="true" />
          <span className="hidden md:block">Log Out</span>
        </button>
      </Link>
    </div>
  );
};
export default AdminSidebar;
