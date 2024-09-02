import React, { useState } from "react";

const AddQuestionsForm = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = () => {
    const newQuestion = {
      question: questionText,
      options: [...options],
      correctAnswer,
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <h3 className="text-lg font-bold text-purple-700 mb-4">
        Add Question
      </h3>
      <input
        type="text"
        className="w-full p-3 mb-4 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
        placeholder="Enter your question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            className="w-full p-3 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) =>
              setOptions(
                options.map((opt, i) => (i === index ? e.target.value : opt))
              )
            }
          />
        ))}
      </div>
      <input
        type="text"
        className="w-full p-3 mb-4 border rounded focus:ring focus:ring-purple-300 focus:outline-none"
        placeholder="Enter the correct answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <button
        className="bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-800 transition duration-300"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>

      <div className="mt-6">
        <h4 className="text-lg font-bold text-purple-700">Questions List</h4>
        <ul>
          {questions.map((q, index) => (
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
      </div>
    </div>
  );
};

export default AddQuestionsForm;





/*import React, { useState } from "react";

const AddQuestionsForm = ({ selectedDepartment }) => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = () => {
    const newQuestion = {
      question: questionText,
      options: [...options],
      correctAnswer,
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h3 className="text-lg font-bold text-purple-700 mb-4">
        Add Question - {selectedDepartment}
      </h3>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter your question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            className="w-full p-2 border rounded"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) =>
              setOptions(
                options.map((opt, i) => (i === index ? e.target.value : opt))
              )
            }
          />
        ))}
      </div>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter the correct answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <button
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 transition duration-300"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>

      <div className="mt-6">
        <h4 className="text-lg font-bold text-purple-700">Questions List</h4>
        <ul>
          {questions.map((q, index) => (
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
      </div>
    </div>
  );
};

export default AddQuestionsForm;*/
