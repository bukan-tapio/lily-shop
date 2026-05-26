import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div
        className="footer-container"
        style={{
          width: "100%",
          backgroundColor: "salmon",
        }}
      >
        <section
          className="laporan"
          style={{
            padding: "16px 0",
            backgroundColor: "#ff696c",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link to="">Partner</Link>
          <Link to="">Donasi</Link>
          <Link to="">Laporkan link rusak</Link>
        </section>

        <section
          className="footer-section"
          style={{
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: ".2rem",
          }}
        >
          <div className="image-website">
            <Link to="">{/* image website */}</Link>
          </div>

          <div>
            <p>
              Website ini dibuat oleh penggemar lily, tidak ada sangkut paut
              apapun dengan JKT48 dan member tersebut.
            </p>
          </div>

          <div className="medsos-icon">
            <Link to="">{/* image sosial media */}</Link>

            <Link to="">{/* image sosial media */}</Link>

            <Link to="">{/* image sosial media */}</Link>
          </div>

          <div className="lilyShop-copyright">
            Copyright &copy; Lilyshop V3. All Rights Reserved. Powered by{" "}
            <b>pioTapio</b>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
