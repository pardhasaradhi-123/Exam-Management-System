import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddQuestionsForm = () => {
  const [qeustionsData, setQeustionsData] = useState({
    qns: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: "",
  });

  const handleAddQuestion = () => {
    const newQuestion = {
      question: qeustionsData.qns,
      options1: qeustionsData.option1,
      option2: qeustionsData.option2,
      option3: qeustionsData.option3,
      option4: qeustionsData.option4,

      correctAnswer: qeustionsData.ans,
    };
    const existingData = JSON.parse(localStorage.getItem("questionData")) || [];
    existingData.push(newQuestion);
    localStorage.setItem("questionData", JSON.stringify(existingData));
  };

  const handleChange = (e) => {
    setQeustionsData({ ...qeustionsData, [e.target.name]: e.target.value });
  };
  console.log(qeustionsData);
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <div className="flex justify-end">
        <Link to={"/admin-dashboard"}>
          <button className="bg-indigo-500 text-white rounded-lg p-3 capitalize">
            back to dashboard
          </button>
        </Link>
      </div>
      <h3 className="text-lg font-bold text-purple-700 mb-4">Add Question</h3>
      <input
        type="text"
        className="w-full p-3 mb-4 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
        placeholder="Enter your question"
        name="qns"
        value={qeustionsData.qns}
        onChange={handleChange}
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          className="w-full p-3 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
          placeholder={`option1`}
          name="option1"
          value={qeustionsData.option1}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full p-3 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
          placeholder={`option2`}
          name="option2"
          value={qeustionsData.option2}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full p-3 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
          placeholder={`option3`}
          name="option3"
          value={qeustionsData.option3}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full p-3 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
          placeholder={`option4`}
          name="option4"
          value={qeustionsData.option4}
          onChange={handleChange}
        />
      </div>
      <input
        type="text"
        className="w-full p-3 mb-4 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
        placeholder="Enter the correct answer"
        name="ans"
        value={qeustionsData.ans}
        onChange={handleChange}
      />
      <button
        className="bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-800 transition duration-300"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>

      {/* <div className="mt-6">
        <h4 className="text-lg font-bold text-purple-700">Questions List</h4>
        <ul>
          {question.map((q, index) => (
            <li key={index} className="mt-4">
              <p className="font-semibold">{q.question}</p>
              <ul className="pl-4">
                {q.options.map((option, i) => (
                  <li key={i} className="mb-1">
                    {option} {option === q.correctAnswer && "(Correct)"}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default AddQuestionsForm;
