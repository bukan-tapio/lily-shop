import { useState } from "react";
import Card from "./components/Cards";

const App = () => {
  const [amountProduct, setAmountProduct] = useState([]);

  const getProducts = async () => {
    const request = await fetch("http://localhost:3000/products", {
      method: "GET",
    });

    const response = await request.json();
    setAmountProduct(response);

    console.log(response);
  };

  return (
    <div className="container">
      <span className="hello world"></span>

      <button
        onClick={getProducts}
        style={{ backgroundColor: "salmon", widt: "5rem" }}
      >
        Click button ini
      </button>

      <div className="cards-container">
        {amountProduct.map((duct) => {
          return (
            <Card
              key={duct.id}
              name={duct.name_product}
              image={duct.link_image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
