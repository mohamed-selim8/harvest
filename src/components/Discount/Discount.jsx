import "./discount.css";
import { Buttn } from "../Home/Home";

function Discount() {
  return (
    <section className="container bac my-5 ">
      <div className="dis-content d-flex flex-column flex-md-row">
        <div className="contentt  text-center shadow-lg rounded p-4 d-flex flex-column ">
          <span
            className="spn text-warning"
            style={{
              fontSize: "50px",
              fontWeight: "700",
            }}
          >
            20%
          </span>
          <div>
            <h1 className="text-capitalize" style={{ fontWeight: "700" }}>
              first order discount!
            </h1>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda inventore, eligendi excepturi eaque dignissimos veniam
              nulla quibusdam laboriosam maxime deleniti.
            </p>
            <Buttn>get discount</Buttn>
          </div>
        </div>
        <div className="dis-icon ">
          <img src="imgs/fresh-fruits.png" className="ib" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Discount;
