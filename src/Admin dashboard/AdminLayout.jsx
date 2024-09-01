
import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Dashboard from './Dashboard';

const AdminLayout = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleSelectDepartment = (department) => {
        setSelectedDepartment(department);
    };

    return (
      <>
        <div className="flex gap-8">
            <AdminSidebar onSelectDepartment={handleSelectDepartment} />
            
        </div>
        <div className="w-100% md:ml-60 ">
          <Dashboard selectedDepartment={selectedDepartment} />

        </div>
        </>
    );
};

export default AdminLayout;




/*import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleSelectDepartment = (department) => {
    setSelectedDepartment(department);
  };
  return (
    <>
      <div className="flex gap-8">
        <div>
          <AdminSidebar onSelectDepartment={handleSelectDepartment} />
        </div>
        <div className="w-full md:ml-60">
          <Dashboard />
        </div>
      </div>
    </>
  );
}*/
