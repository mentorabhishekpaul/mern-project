import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
  return (
    <Layout>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-sm-3">
            <AdminMenu />
          </div>
          <div className="col-sm-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
