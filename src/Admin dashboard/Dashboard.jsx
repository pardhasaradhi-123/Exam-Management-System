import React from "react";

import DashboardCards from "./DashboardCards";
import DashboardGraphs from "./DashboardGraphs";
import StudentList from "./StudentList";

const Dashboard = ({ selectedDepartment }) => {
  let students = {
    "Computer Science": ["Alice", "Bob", "Charlie", "Adarsh", "Micky"],
    Mechanical: ["Dave", "Eve", "Frank", "Bharath", "Naresh"],
    Electrical: ["Grace", "Heidi", "Ivan", "Sai", "Aravind"],
    Civil: ["Jack", "Ken", "Liam", "Dileep", "Kattappa"],
  };
  let users = {
    mechanicalUser: null,
    cse: null,
  };
  const studentList = JSON.parse(localStorage.authDataList);

  console.log(studentList.filter((user) => user.department));

  users.cse = studentList.filter((user) => user.department === "CSE");
  console.log(users);

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 ml-2">
        Admin Dashboard
      </h2>
      {selectedDepartment ? (
        <StudentList
          students={students[selectedDepartment]}
          department={selectedDepartment}
          users={users[selectedDepartment]}
        />
      ) : (
        <>
          <DashboardCards />
          <DashboardGraphs />
        </>
      )}
    </div>
  );
};

export default Dashboard;
