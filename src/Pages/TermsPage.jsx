// LINK hanya merubah pada browser, bukan request ke server

import { Link } from "react-router";

const TermsPage = () => {
  return (
    <>
      <h1>Terms Page</h1>
      <Link to="/">Kembali ke home</Link>
    </>
  );
};

export default TermsPage;
