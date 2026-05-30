const Spinner = () => {
  return (
    <div
      className="isLoading"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        overflow: "hidden",
        zIndex: "999",
        backgroundColor: "rgba(0,0,0, .7)",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        className="isLoadingMessage"
        style={{ fontSize: "3rem", fontWeight: "700", color: "#ffffff" }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
