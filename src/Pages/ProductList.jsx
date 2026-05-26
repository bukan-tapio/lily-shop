import { useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsHandle = (params) => {
    searchParams.set("sort", params);
    setSearchParams(searchParams);
  };

  return (
    <>
      <h1>Ini products list : {searchParams.get("sort")}</h1>

      <div className="button-container">
        <button onClick={() => paramsHandle("asc")}>Ganti dengan ASC</button>
        <button onClick={() => paramsHandle("masuk")}>Ganti dengan ASC</button>
      </div>
    </>
  );
};

export default ProductListPage;
