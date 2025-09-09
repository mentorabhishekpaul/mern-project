import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (response && response.data.success) {
        toast.success(response.data && response.data.message);

        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong!!!");
    }
  };
  return (
    <Layout title={"Verify yourself if you forgot password"}>
      <form className="p-3 bg-light m-3" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            <b>Email:</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="answer" className="form-label">
            <b>Secret Answer:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="answer"
            placeholder="Enter Your Mother's maiden Name"
            name="answer"
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="new-password" className="form-label">
            <b>New Password:</b>
          </label>
          <input
            type="new-password"
            className="form-control"
            id="new-password"
            placeholder="Enter New Password"
            name="new-password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </Layout>
  );
};

export default ForgotPasswordPage;
