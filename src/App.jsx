import { Routes, Route } from "react-router";
import TermsPage from "./Pages/TermsPage";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductListPage from "./Pages/ProductList";
import "./style/Global.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/product" element={<ProductDetailPage />} />

        {/* dynamic route */}
        <Route path="/products" element={<ProductListPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
