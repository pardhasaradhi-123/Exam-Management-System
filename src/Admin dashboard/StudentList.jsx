const StudentList = ({ students, department }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-20">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
        Students of {department}
      </h3>
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
              <td className="py-3 px-4 flex items-center">{student}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
