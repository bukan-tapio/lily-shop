// LINK hanya merubah pada browser, bukan request ke server

import { Link } from "react-router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/IsLoading";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await fetch("http://localhost:3000/books", {
          method: "GET",
        });
        const response = await request.json();
        setProducts(response);

        setIsLoading(false);
      } catch (e) {
        alert(e);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const contentPerPage = 5;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / contentPerPage);
  const startIndexContent = (currentPage - 1) * contentPerPage;
  const endIndexContent = startIndexContent + contentPerPage;
  const currentContent = products.slice(startIndexContent, endIndexContent);

  const gotoNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const gotoPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const gotoPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isLoading ? <Spinner /> : null}
      <Navbar />
      <div className="container" style={{ width: "100%" }}>
        <h1>Hello world</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/terms">Pergi ke terms</Link>
        </div>

        <div
          className="card-container"
          style={{
            width: "100%",
            marginTop: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".7rem",
            flexWrap: "wrap",
          }}
        >
          {currentContent.map((content) => {
            return (
              <Card
                key={content.id}
                name={content.name_product}
                image={content.link_image}
              />
            );
          })}
        </div>

        <div
          className="pagination"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            className="prev-button"
            disabled={currentPage === 1}
            onClick={gotoPrevPage}
            style={{ marginRight: "1rem", padding: ".5rem 1rem" }}
          >
            Sebelum
          </button>

          <div className="number-page">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  className="number-page-button"
                  key={index}
                  onClick={() => {
                    gotoPage(pageNumber);
                  }}
                  style={{ padding: ".5rem 1rem" }}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            className="next-button"
            disabled={currentPage === totalPages || products.length === 0}
            onClick={gotoNextPage}
            style={{ marginLeft: "1rem", padding: ".5rem 1rem" }}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
