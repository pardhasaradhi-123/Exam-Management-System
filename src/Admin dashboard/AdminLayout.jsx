import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Dashboard";

const AdminLayout = () => {
  return (
    <>
      <div className="flex gap-8">
        <AdminSidebar />
      </div>
      <div className="md:ml-60 ml-80">
        <Dashboard />
      </div>
    </>
  );
};

export default AdminLayout;
