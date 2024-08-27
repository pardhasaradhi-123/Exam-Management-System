import React from "react";

import { FaFontAwesome, FaUser } from "react-icons/fa";

const StudentList = ({ students }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Students</h3>
      <ul className="list-none p-0">
        {students.map((student) => (
          <li
            key={student}
            className="flex items-center mb-4 p-3 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <FaFontAwesome icon={FaUser} className="text-purple-500 mr-3" />
            <span className="text-lg font-medium text-gray-700">{student}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
