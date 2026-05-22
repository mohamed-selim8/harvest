import "./baner.css";
function Banner({ img, children }) {
  return (
    <section
      className="banner d-flex align-items-center justify-content-center mb-4"
      style={{
        background: `url(${img})`,
        height: "50vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="myBannar bg-whit  p-5 text-center text-capitalize h-25 d-flex align-items-center justify-content-center shadow"
        style={{ zIndex: "4", borderRadius: "14px" }}
      >
        {children}
      </h1>
    </section>
  );
}

export default Banner;
