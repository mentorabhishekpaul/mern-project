import React from "react";
import Layout from "../components/Layout/Layout";

const ContactUsPage = () => {
  return (
    <Layout title={"Contact Us Now!!!"}>
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>
              We’d love to hear from you! Reach out to us with your queries or
              feedback.
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> abhishekpaul.24@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +91 89204 00096
              </li>
              <li>
                <strong>Address:</strong> Block F, New Industrial Township 2,
                Faridabad, India
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2>Send a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="Write your message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUsPage;
