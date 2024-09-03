import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";

export default function Exam() {
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

  const dataFromLocal = JSON.parse(localStorage.getItem("questionData"));
  console.log(dataFromLocal);
  localStorage.setItem("answers", JSON.stringify);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 border-b-2 max-sm:ml-[-1rem]">
        {examCardsData.map((index) => (
          <article
            key={index.title}
            className={`rounded-md shadow-md shadow-violet-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-300 p-4 ${index.bgColor} ${index.textColor}`}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg capitalize">{index.title}</p>
              <index.icon size={38} />
            </div>
            <p className="flex justify-center items-center text-md my-2 p-4 text-gray-600">
              {index.description}
            </p>
            <h1 className="font-semibold text-xl">{index.value}</h1>
          </article>
        ))}
      </div>

      <div className="mx-4 p-2 mt-5">
        <h1 className="text-center text-3xl font-bold mb-3">
          Assessment Examination
        </h1>
        {dataFromLocal ? (
          <div className="grid grid-cols-3 gap-[1rem] max-md:grid-cols-2 max-sm:grid-cols-1">
            {dataFromLocal.map((qns, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-300"
              >
                <h2 className="font-semibold text-lg">{qns.question}</h2>
                <ul className="mt-4">
                  <li className="my-2">
                    1{") "}
                    {qns.options1}
                  </li>
                  <li className="my-2">
                    2{") "}
                    {qns.option2}
                  </li>
                  <li className="my-2">
                    3{") "}
                    {qns.option3}
                  </li>
                  <li className="my-2">
                    4{") "}
                    {qns.option4}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-center">Question paper not issued!</h1>
        )}
      </div>
    </>
  );
}
