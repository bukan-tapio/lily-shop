// LINK hanya merubah pada browser, bukan request ke server

import { Link } from "react-router";

const ProductDetailPage = () => {
  return (
    <>
      <h1>Product detail</h1>
      <Link to="/">Kembali ke home</Link>
    </>
  );
};

export default ProductDetailPage;
