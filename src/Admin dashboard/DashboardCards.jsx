import React from "react";
import { FaUsers, FaBuilding, FaQuestionCircle } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Students",
      icon: <FaUsers className="text-white text-2xl" />,
      value: "1200 Students",
      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Total Departments",
      icon: <FaBuilding className="text-white text-2xl" />,
      value: "5 Departments",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      title: "Total Questions",
      icon: <FaQuestionCircle className="text-white text-2xl" />,
      value: "150 Questions",
      bgColor: "bg-gradient-to-r from-blue-500 to-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-lg ${card.bgColor} transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 p-4 rounded-full bg-white bg-opacity-20">
              {card.icon}
            </div>
            <div className="ml-4 w-full">
              <h4 className="text-lg sm:text-xl font-semibold text-white truncate">
                {card.title}
              </h4>
              <p className="mt-2 text-sm sm:text-base text-white truncate">
                {card.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
