import React from "react";
import {
  FaTrophy,
  FaCalendarAlt,
  FaClipboardList,
  FaChartLine,
  FaClipboardCheck,
  FaClock,
} from "react-icons/fa";

export default function Home() {
  const cardData = [
    {
      id: 1,
      name: "upcoming exams",
      icon: FaCalendarAlt,
      desc: "Displays the number of upcoming exams or the date of the next exam.",
      value: "Next: Aug 30",
      bgColor: "bg-gradient-to-r from-blue-100 to-blue-200",
      textColor: "text-blue-700",
    },
    {
      id: 2,
      name: "total marks scored",
      icon: FaTrophy,
      desc: "Shows the total marks scored across all completed exams.",
      value: "45/50",
      bgColor: "bg-gradient-to-r from-yellow-100 to-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      id: 3,
      name: "pending assignments",
      icon: FaClipboardList,
      desc: "Indicates the number of pending assignments or tasks related to exams.",
      value: "2 Pending",
      bgColor: "bg-gradient-to-r from-red-100 to-red-200",
      textColor: "text-red-700",
    },
    {
      id: 4,
      name: "recent results",
      icon: FaChartLine,
      desc: "Displays the performance in the most recent exam.",
      value: "85%",
      bgColor: "bg-gradient-to-r from-green-100 to-green-200",
      textColor: "text-green-700",
    },
    {
      id: 5,
      name: "total exams attempted",
      icon: FaClipboardCheck,
      desc: "Shows the total number of exams the user has attempted.",
      value: "5 Exams",
      bgColor: "bg-gradient-to-r from-indigo-100 to-indigo-200",
      textColor: "text-indigo-700",
    },
    {
      id: 6,
      name: "study hours logged",
      icon: FaClock,
      desc: "Displays the total number of study hours logged by the user.",
      value: "25 Hours",
      bgColor: "bg-gradient-to-r from-purple-100 to-purple-200",
      textColor: "text-purple-700",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {cardData.map((card) => (
          <article
            key={card.id}
            className={`rounded-md ${card.bgColor} shadow-md shadow-violet-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-300 p-4`}
          >
            <div className="flex items-center justify-between">
              <p
                className={`font-semibold text-lg capitalize ${card.textColor}`}
              >
                {card.name}
              </p>
              <card.icon size={38} className={card.textColor} />
            </div>
            <p className="flex justify-center items-center text-md my-2 p-4 text-gray-500">
              {card.desc}
            </p>
            <h1 className={`font-semibold text-xl ${card.textColor}`}>
              {card.value}
            </h1>
          </article>
        ))}
      </div>
    </>
  );
}
