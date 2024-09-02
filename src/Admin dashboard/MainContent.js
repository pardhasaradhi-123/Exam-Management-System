import React from "react";
import AddQuestionsForm from "./AddQuestionsForm";

const MainContent = ({ selectedDepartment, showQuestionsForm }) => {
  return (
    <div className="flex-1 p-6">
      {showQuestionsForm ? (
        <AddQuestionsForm />
      ) : (
        <div>
          {selectedDepartment ? (
            <div>
              <h1 className="text-2xl font-bold">{selectedDepartment} Students</h1>
              <ul>
                {/* Display students or other content based on selectedDepartment */}
              </ul>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              {/* Display default dashboard content here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainContent;
