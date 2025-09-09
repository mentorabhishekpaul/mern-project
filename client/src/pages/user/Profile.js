import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Profile = () => {
  return (
    <Layout>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-sm-3">
            <UserMenu />
          </div>
          <div className="col-sm-9">
            <h1>Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
