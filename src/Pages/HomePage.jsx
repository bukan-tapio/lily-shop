// LINK hanya merubah pada browser, bukan request ke server

import { Link } from "react-router";
import { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const request = await fetch("http://localhost:3000/books", {
      method: "GET",
    });

    const response = await request.json();

    setProducts(response);

    console.log(response);
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ width: "100%", minHeight: "100vh" }}>
        <h1>Hello world</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/terms">Pergi ke terms</Link>
          <button onClick={fetchProduct}>Fetch</button>
        </div>

        <div
          className="card-container"
          style={{
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: ".7rem",
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.name_product}
                image={product.link_image}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
