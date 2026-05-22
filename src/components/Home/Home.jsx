import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    // Start header home section

    <header className="container my-md-5 pt-3 ">
      <div className="row hero-home">
        <div className="hero col-md-6">
          <h1 className="text-capitalize my-4">
            tasty organic <span className="sc-txt">fruits</span> &{" "}
            <span className="sc-txt">veggies</span> in your city
          </h1>
          <p className=" text-black-50">
            Bred for a high content of benefical substances. Our products are
            all fresh and health
          </p>
          <Buttn>
            {" "}
            <Link
              className=" text-decoration-none text-white"
              to={"/allProducts"}
            >
              shop now{" "}
            </Link>
          </Buttn>
        </div>
        <div className="col-md-6 ">
          <img
            className="img w-100 h-100  "
            src="imgs/grocery.png"
            alt="hero imag"
          />
        </div>
      </div>
    </header>

    // End header home section
  );
}
function Buttn({ children }) {
  return (
    <div className="my-4">
      <Link className="btnn rounded text-decoration-none text-capitalize p-1  rounded-pil btn-warning text-white">
        {children}
      </Link>
    </div>
  );
}
export { Buttn };
export default Home;
