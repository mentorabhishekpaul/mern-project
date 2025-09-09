import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-products`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-sm-3">
            <AdminMenu />
          </div>
          <div className="col-sm-9">
            <h1 className="text-center">Our Products</h1>

            <div className="row">
              {products.map((p) => (
                <div className="card" style={{ width: 300 }} key={p._id}>
                  <img
                    className="card-img-top"
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <Link
                      to={`/dashboard/admin/products/${p.slug}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h4 className="card-title">{p.name}</h4>
                    </Link>
                    <p className="card-text">
                      <b>Description: </b>
                      {p.description}
                    </p>
                    <p className="card-text">
                      <b>Price: </b>
                      {p.price}
                    </p>
                    <p className="card-text">
                      <b>Stock: </b>
                      {p.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
