




import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Dashboard from './Dashboard';
import MainContent from './MainContent';


const AdminLayout = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [showQuestionsForm, setShowQuestionsForm] = useState(false);

    const handleSelectDepartment = (department) => {
        setSelectedDepartment(department);
    };
    const handleShowQuestionsForm = () => {
      setShowQuestionsForm(!showQuestionsForm);
    };

    return (
      <>
        <div className="flex gap-8">
            <AdminSidebar onSelectDepartment={handleSelectDepartment} onShowQuestionsForm={handleShowQuestionsForm}  />
            
        </div>
        <div className="w-100% md:ml-60 ">
          <Dashboard selectedDepartment={selectedDepartment}  showQuestionsForm={showQuestionsForm}/>
          
          

          

        </div>
        
        </>
    );
};

export default AdminLayout;




