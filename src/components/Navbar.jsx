import { NavLink } from "react-router";
import { Form } from "react-router";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar-container"
        style={{
          width: "100%",
          marginBottom: "1.5rem",
          backgroundColor: "salmon",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="icon-website">{/* icon website */}</div>

        <nav style={{ display: "flex", alignItems: "center" }}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: "700",
              fontFamily: "sans-serif",
              padding: "24px 44px",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/terms"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: "700",
              fontFamily: "sans-serif",
              padding: "24px 44px",
            }}
          >
            Terms
          </NavLink>
          <NavLink
            to="/gendre"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: "700",
              fontFamily: "sans-serif",
              padding: "24px 44px",
            }}
          >
            Gendre
          </NavLink>
          <NavLink
            to="/ads"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontWeight: "700",
              fontFamily: "sans-serif",
              padding: "24px 44px",
            }}
          >
            Pasang iklan
          </NavLink>
        </nav>

        <form
          action="/"
          method="get"
          style={{ marginLeft: "5rem", display: "flex", gap: ".4rem" }}
        >
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            style={{
              outline: "none",
              padding: ".5rem ",
              display: "inline",
              border: ".5px solid grey",
              borderRadius: "5px",
            }}
          />
          <button
            className="search-button"
            style={{
              padding: ".5rem 1.2rem",
              display: "inline",
              outline: "none",
              borderRadius: "5px",
              backgroundColor: "peachpuff",
              color: "#000000",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
