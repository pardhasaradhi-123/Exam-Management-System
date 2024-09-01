import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaFontAwesome, FaUser } from "react-icons/fa";

const StudentList = ({ students, department }) => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-20">
            <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Students of {department}</h3>
            <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-blue-500 text-white text-left">
                        <th className="py-3 px-4 font-semibold text-sm">Serial No.</th>
                        <th className="py-3 px-4 font-semibold text-sm">Department</th>
                        <th className="py-3 px-4 font-semibold text-sm">Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr 
                            key={student} 
                            className="border-b hover:bg-purple-100 transition duration-300 ease-in-out"
                        >
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">{department}</td>
                            <td className="py-3 px-4 flex items-center">
                                <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-2" />
                                {student}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;



/*import React from "react";

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

export default StudentList;*/
