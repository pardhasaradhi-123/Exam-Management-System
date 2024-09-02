/*import React, { useState } from 'react';
import { FaHome, FaBook, FaSignOutAlt, FaLaptopCode, FaCogs, FaBolt, FaBuilding } from 'react-icons/fa';

const Sidebar = ({ onSelectDepartment }) => {
    const [showDepartments, setShowDepartments] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const departments = [
        { name: 'Computer Science', icon: <FaLaptopCode /> },
        { name: 'Mechanical', icon: <FaCogs /> },
        { name: 'Electrical', icon: <FaBolt /> },
        { name: 'Civil', icon: <FaBuilding /> }
    ];

    const students = {
        'Computer Science': ['Alice', 'Bob', 'Charlie','Adarsh','Micky','Deviprasad'],
        'Mechanical': ['Dave', 'Eve', 'Frank','Bharath','Naresh'],
        'Electrical': ['Grace', 'Heidi', 'Ivan','Sai','Aravind'],
        'Civil': ['Jack', 'Ken', 'Liam','dileep','Kattappa'],
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

    return (
        <div className={`bg-purple-50 h-100% p-6 flex flex-col justify-between w-64 transition-all duration-300  border-r z-10`}>
            <div>
                <div className="flex items-center mb-6">
                    <FaLaptopCode className="text-3xl text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-purple-600 max-sm:hidden">
                        Exam Management System
                    </h2>
                </div>
                <ul className="mt-10">
                    <li className="mb-6">
                        <a href="#" className="flex items-center text-lg text-purple-600 hover:bg-purple-200 hover:text-purple-800 p-2 rounded transition duration-300" onClick={handleDashboardClick}>
                            <FaHome className="mr-3" />
                            <span className="hidden md:block">Dashboard</span>
                        </a>
                    </li>
                    <li className="mb-6">
                        <a href="#" className="flex items-center text-lg text-purple-600 hover:bg-purple-200 hover:text-purple-800 p-2 rounded transition duration-300" onClick={() => setShowDepartments(!showDepartments)}>
                            <FaBook className="mr-3" />
                            <span className="hidden md:block">Departments</span>
                        </a>
                    </li>
                </ul>

                {showDepartments && (
                    <ul className="mt-10">
                        {departments.map((dept) => (
                            <li key={dept.name} className="mb-4 ml-4 cursor-pointer text-purple-600 hover:bg-purple-200 hover:text-purple-800 p-2 rounded transition duration-300 flex items-center" onClick={() => handleDepartmentClick(dept.name)}>
                                {dept.icon} <span className="ml-3">{dept.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 w-full flex items-center justify-center transition duration-300">
                <FaSignOutAlt className="mr-3" />
                <span className="hidden md:block">Log Out</span>
            </button>
        </div>
    );
};

export default Sidebar;*/

import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaSignOutAlt,
  FaLaptopCode,
  FaCogs,
  FaBolt,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = ({ onSelectDepartment }) => {
  const [showDepartments, setShowDepartments] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

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

  return (
    <div
      className={`bg-purple-50 h-full p-6 flex flex-col justify-between w-64 transition-all duration-300 fixed left-0 border-r z-10`}
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
            <a
              href="#"
              className="flex items-center text-lg text-purple-600 hover:bg-purple-200 hover:text-purple-800 p-2 rounded transition duration-300"
              onClick={handleDashboardClick}
            >
              <FaHome className="mr-3" />
              <span className="hidden md:block">Dashboard</span>
            </a>
          </li>
          <li className="mb-6">
            <a
              href="#"
              className="flex items-center text-lg text-purple-600 hover:bg-purple-200 hover:text-purple-800 p-2 rounded transition duration-300"
              onClick={() => setShowDepartments(!showDepartments)}
            >
              <FaBook className="mr-3" />
              <span className="hidden md:block">Departments</span>
            </a>
          </li>
        </ul>
        {showDepartments && (
          <ul className="mt-10">
            {departments.map((dept) => (
              <li
                key={dept.name}
                className="mb-4 ml-4 cursor-pointer text-purple-600 hover:bg-purple-200 hover:text-purple-800 p-2 rounded transition duration-300 flex items-center"
                onClick={() => handleDepartmentClick(dept.name)}
              >
                {dept.icon} <span className="ml-3">{dept.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/">
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 w-full flex items-center justify-center transition duration-300"
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
