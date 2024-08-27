import React, { useState } from 'react';
import DashboardCards from './DashboardCards';
import DashboardGraphs from './DashboardGraphs';
import StudentList from './StudentList';

const Dashboard = ({ selectedDepartment }) => {
    const students = {
        'Computer Science': ['Alice', 'Bob', 'Charlie','Adarsh','Micky'],
        'Mechanical': ['Dave', 'Eve', 'Frank','Bharath','Naresh'],
        'Electrical': ['Grace', 'Heidi', 'Ivan','Sai','Aravind'],
        'Civil': ['Jack', 'Ken', 'Liam','Dileep','Kattappa'],
    };

    return (
        <div className="p-6 w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 ml-2">Admin Dashboard</h2>
            {selectedDepartment ? (
                <StudentList students={students[selectedDepartment]} />
            ) : (
                <>
                    <DashboardCards />
                    <DashboardGraphs />
                </>
            )}
        </div>
    );
};

export default Dashboard;




