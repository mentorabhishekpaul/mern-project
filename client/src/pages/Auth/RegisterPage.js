import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
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
    <Layout title={"Register Yourself to Buy Products"}>
      <form className="p-3 bg-light m-3" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            <b>Full Name:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Full Name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <label htmlFor="password" className="form-label">
            <b>Password:</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="phone" className="form-label">
            <b>Phone Number:</b>
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            <b>Address:</b>
          </label>
          <textarea
            className="form-control"
            id="address"
            placeholder="Enter Your Address"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            <b>Security Answer:</b>
          </label>
          <textarea
            className="form-control"
            id="answer"
            placeholder="What is your mother's maiden name?"
            name="answer"
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </Layout>
  );
};

export default RegisterPage;
