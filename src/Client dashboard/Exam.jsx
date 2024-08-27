import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";

export default function Exam() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const examCardsData = [
    {
      id: 1,
      title: "Completed Exams",
      icon: FaCheckCircle,
      description: "Review your completed exams and results.",
      bgColor: "bg-gradient-to-r from-green-100 to-green-200",
      textColor: "text-green-700",
      value: "2 Exams",
    },
    {
      id: 2,
      title: "Missed Exams",
      icon: FaExclamationCircle,
      description: "Check the exams you missed and take necessary actions.",
      bgColor: "bg-gradient-to-r from-red-100 to-red-200",
      textColor: "text-red-700",
      value: "1 Exam",
    },
    {
      id: 3,
      title: "Exam Guidelines",
      icon: FaInfoCircle,
      description: "Read the guidelines and instructions for exams.",
      bgColor: "bg-gradient-to-r from-violet-100 to-violet-200",
      textColor: "text-violet-700",
      value: "5 Guidelines",
    },
  ];

  const examProgressData = [
    {
      id: 1,
      examName: "English",
      icon: FaHourglassHalf,
      description: "You are almost done with the English exam.",
      progress: "80%",
      bgColor: "bg-blue-500",
      textColor: "text-blue-700",
      progressColor: "bg-blue-600",
      status: "In Progress",
      btnName: "take test",
      score: "43/50",
    },
    {
      id: 2,
      examName: "Mathematics",
      icon: FaCheckCircle,
      description: "You have completed the Mathematics exam.",
      progress: "100%",
      bgColor: "bg-green-500",
      textColor: "text-green-700",
      progressColor: "bg-green-600",
      status: "Completed",
      btnName: "view score",
      score: "44/50",
    },
    {
      id: 3,
      examName: "Physics",
      icon: FaHourglassHalf,
      description: "You are halfway through the Physics exam.",
      progress: "50%",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-900",
      progressColor: "bg-yellow-600",
      status: "In Progress",
      btnName: "take test",
      score: "50/50",
    },
    {
      id: 4,
      examName: "Biology",
      icon: FaCheckCircle,
      description: "You have completed the Biology exam.",
      progress: "100%",
      bgColor: "bg-green-500",
      textColor: "text-green-700",
      progressColor: "bg-green-600",
      status: "Completed",
      btnName: "view score",
      score: "41/50",
    },
    {
      id: 5,
      examName: "Chemistry",
      icon: FaTimesCircle,
      description: "You have not started the Chemistry exam yet.",
      progress: "0%",
      bgColor: "bg-red-500",
      textColor: "text-red-700",
      progressColor: "bg-red-600",
      status: "Not Started",
      btnName: "take test",
      score: "40/50",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 border-b-2 max-sm:ml-[-1rem]">
        {examCardsData.map((index) => {
          return (
            <article
              key={index.title}
              className={`rounded-md shadow-md shadow-violet-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-300 p-4 ${index.bgColor} ${index.textColor}`}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-lg capitalize">
                  {index.title}
                </p>
                <index.icon size={38} />
              </div>
              <p className="flex justify-center items-center text-md my-2 p-4 text-gray-600">
                {index.description}
              </p>
              <h1 className="font-semibold text-xl">{index.value}</h1>
            </article>
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4 p-4 mt-5 max-lg:grid-cols-2 max-sm:grid-cols-1 bg-white rounded-md shadow-lg max-sm:ml-[-1rem]">
        {examProgressData.map((exam) => (
          <article
            key={exam.id}
            className={`rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 p-4 flex flex-col justify-between ${
              flippedCards[exam.id] ? "flipped bg-white" : "bg-bgGray"
            }`}
          >
            {flippedCards[exam.id] ? (
              <>
                <div>
                  <h1
                    className={`font-semibold text-lg capitalize ${exam.textColor}`}
                  >
                    {exam.examName}
                  </h1>
                </div>
                <h1
                  className={` flex justify-center items-centerfont-bold text-3xl max-sm:my-5 ${exam.textColor}`}
                >
                  {exam.score}
                </h1>
                <div>
                  <button
                    className="w-full outline-none uppercase p-3 mt-4 rounded-full bg-gray-500 font-semibold text-lg tracking-wide text-white"
                    onClick={() => handleFlip(exam.id)}
                  >
                    Go Back
                  </button>
                </div>
              </>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <p
                    className={`font-semibold text-lg capitalize ${exam.textColor}`}
                  >
                    {exam.examName}
                  </p>
                  <exam.icon size={38} className={exam.textColor} />
                </div>
                <p className="flex justify-center items-center text-md my-2 p-4 text-gray-600">
                  {exam.description}
                </p>
                <div className="flex items-center justify-between">
                  <h1 className={`font-semibold text-xl ${exam.textColor}`}>
                    {exam.progress}
                  </h1>
                  <span className={`font-medium text-md ${exam.textColor}`}>
                    {exam.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                  <div
                    className={`${exam.progressColor} h-full rounded-full`}
                    style={{ width: exam.progress }}
                  ></div>
                </div>
                <button
                  className={`w-full outline-none uppercase p-3 mt-4 rounded-full ${exam.bgColor} font-semibold text-lg tracking-wide text-white`}
                  onClick={
                    exam.btnName === "view score"
                      ? () => handleFlip(exam.id)
                      : null
                  }
                >
                  {exam.btnName}
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
