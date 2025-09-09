import React from "react";
import Layout from "../components/Layout/Layout";

const AboutUsPage = () => {
  return (
    <Layout title={"About Us - Know more about eCommerce Site"}>
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead">
            We make great products easy to find and deliver delight to your
            doorstep.
          </p>
        </div>
        {/* Mission and Values */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  Since 2020, YourShop has connected shoppers with quality
                  products at fair prices. We aim to provide fast shipping,
                  secure payments, and friendly customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Our Values</h3>
                <ul>
                  <li>Customer-first approach</li>
                  <li>Transparent pricing</li>
                  <li>Sustainable packaging</li>
                  <li>Quality without compromise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold">1M+</h4>
                <p>Orders Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold">4.8/5</h4>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold">72h</h4>
                <p>Avg. Delivery Time</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3>Contact Us</h3>
                <p>
                  Email:{" "}
                  <a href="mailto:support@yourshop.com">support@yourshop.com</a>
                </p>
                <p>Phone: +91-98765-43210</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3>Secure &amp; Reliable</h3>
                <p>
                  We provide SSL-encrypted payments, PCI-DSS compliance, and COD
                  in select cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
