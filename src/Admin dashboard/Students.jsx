import { useState } from "react";
import { Link } from "react-router-dom";

const Students = () => {
  const [inputState, setInputState] = useState({
    department: "",
  });

  const options = ["All Students", "CSE", "Mechanical", "Electrical", "Civil"];

  const studentList = JSON.parse(localStorage.authDataList);
  console.log(studentList);

  const [filteredStudents, setFilteredStudents] = useState(studentList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Filter students by department
    if (value !== "Select Departments") {
      const filtered = studentList.filter(
        (student) => student.department === value
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(studentList);
    }
  };

  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-20">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
          Students List
        </h3>
        <div>
          <select
            name="department"
            value={inputState.department}
            onChange={handleChange}
            className="p-3 outline-none bg-[#f5f5f5] rounded-md"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="py-3 px-4 font-semibold text-sm">Serial No.</th>
              <th className="py-3 px-4 font-semibold text-sm">Department</th>
              <th className="py-3 px-4 font-semibold text-sm">Student Name</th>
            </tr>
          </thead>
          {filteredStudents ? (
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-purple-100 transition duration-300 ease-in-out"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{student.department}</td>
                  <td className="py-3 px-4 flex items-center">
                    {student.username}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <h1>no more students</h1>
          )}
        </table>
        <Link to={"/admin-dashboard"}>
          <button className="bg-indigo-500 p-3 rounded-md text-white uppercase mt-5">
            back dashboard
          </button>
        </Link>
      </div>
    </>
  );
};

export default Students;
