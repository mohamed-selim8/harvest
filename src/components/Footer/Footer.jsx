import "./footer.css";
import { Link } from "react-router-dom";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
function Footer() {
  return (
    <footer
      className=" position-absolute bottom-0 container-fluid py-5"
      style={{ background: "#e8eaf6" }}
    >
      <div className="row">
        <div className="col-md-3 col-lg-5 text-center ">
          <Link
            to={"/"}
            className="logoo text-decoration-none"
            onClick={() => {
              window.scrollTo({
                top: "0",
                behavior: "smooth",
              });
            }}
          >
            Har<span className="text-warning text-uppercase">v</span>est
          </Link>

          <p className="text-black-50 my-3">
            Bred for a high content of benefical substances. <br />
            Our products are all fresh and health.
          </p>
          <p className="text-capitalize text-black-50">
            2026 &copy; all right reversed
          </p>
        </div>
        <div className="col-md-3 col-lg-2 text-center my-2">
          <h3>Company</h3>
          <p>About</p>
          <p>FAQ`s</p>
        </div>
        <div className="col-md-3 col-lg-2 text-center my-2">
          <h3>Support</h3>
          <p>support center</p>
          <p>facebook</p>
          <p>contact us</p>
        </div>
        <div className="col-md-3 text-center">
          <h3>Stay connected</h3>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa!
          </p>
          <div className="parents  h-25 position-relative m-auto">
            <input
              type="text"
              className="inpu border-warning rounded-pill w-100 h-100"
              placeholder="Email Address"
            />
            <p className="bg-warning email">
              <CallMissedOutgoingIcon className="email-icon text-white " />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
