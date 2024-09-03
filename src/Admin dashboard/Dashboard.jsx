import React from "react";
import DashboardCards from "./DashboardCards";
import DashboardGraphs from "./DashboardGraphs";

const Dashboard = () => {
  return (
    <div className="ml-20">
      <DashboardCards />
      <DashboardGraphs />
    </div>
  );
};

export default Dashboard;
