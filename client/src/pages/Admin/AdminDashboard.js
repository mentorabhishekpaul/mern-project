import React from "react";
import Layout from "../../components/Layout/Layout.js";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import { useAuth } from "../../context/auth.js";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-sm-3">
            <AdminMenu />
          </div>
          <div className="col-sm-9">
            <div className="card m-3 p-3">
              <h4>
                <b>Name:</b> {auth?.user?.name}
              </h4>
              <h4>
                <b>Email:</b> {auth?.user?.email}
              </h4>
              <h4>
                <b>Contact:</b> {auth?.user?.phone}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
