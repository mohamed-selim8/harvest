import { Shopping } from "../Catagories/Categ";
import FactoryIcon from "@mui/icons-material/Factory";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import SpaIcon from "@mui/icons-material/Spa";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function AllProcess() {
  return (
    <section className="container my-5 py-5">
      <Navbar />
      <div className="row">
        <div className="col-12">
          <Shopping shop={"our"} categ={"process"} />
        </div>
        {/* process */}

        {/* first row  */}
        <div className=" col-lg-3 d-lg-block " />
        <div className="col-12 col-md-6 col-lg-3 p-2 ">
          <div className="m-auto">
            <h1 className="bor m-auto d-flex justify-content-center align-items-center">
              <p className="bor2 d-flex justify-content-center align-items-center">
                1
              </p>
            </h1>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center my-2">
            {/* icon */}
            <p className="factory bg-warning mx-3">
              <FactoryIcon style={{ fontSize: "40px" }} />
            </p>
            {/* descript */}
            <div>
              <h1>factory</h1>
              <p className="text-black-50">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 d-md-none d-lg-block " />

        <div className="col-12 col-md-6 col-lg-3  p-2 ">
          <div className="m-auto">
            <h1 className="bor m-auto d-flex justify-content-center align-items-center">
              <p className="bor2 d-flex justify-content-center align-items-center">
                2
              </p>
            </h1>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center my-2">
            {/* icon */}
            <p className="factory bg-warning  mx-3">
              <EmojiTransportationIcon style={{ fontSize: "40px" }} />
            </p>
            {/* descript */}
            <div>
              <h1>logistic</h1>
              <p className="text-black-50">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        {/* end first row */}

        {/* second row  */}
        <div className="col-12 col-md-6 col-lg-3  p-2 ">
          <div className="m-auto">
            <h1 className="bor m-auto d-flex justify-content-center align-items-center">
              <p className="bor2 d-flex justify-content-center align-items-center">
                3
              </p>
            </h1>
          </div>
          <div className="  d-flex align-items-center justify-content-sm-center my-2">
            {/* icon */}
            <p className="factory bg-warning  mx-3">
              <SpaIcon style={{ fontSize: "40px" }} />
            </p>
            {/* descript */}
            <div>
              <h1 className="text-capitalize">sourcing</h1>
              <p className="text-black-50">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 d-md-none d-lg-block " />

        <div className="col-12 col-md-6 col-lg-3  p-2 ">
          <div className="m-auto">
            <h1 className="bor m-auto d-flex justify-content-center align-items-center">
              <p className="bor2 d-flex justify-content-center align-items-center">
                4
              </p>
            </h1>
          </div>
          <div className="d-flex align-items-center justify-content-sm-center my-2">
            {/* icon */}
            <p className="factory bg-warning  mx-3">
              <MilitaryTechIcon style={{ fontSize: "40px" }} />
            </p>
            {/* descript */}
            <div>
              <h1 className="text-capitalize">quality</h1>
              <p className="text-black-50">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 d-lg-block  " />

        {/* end second row */}
      </div>

      <div
        className="mt-3"
        style={{ position: "absolute", width: "100%", left: "0" }}
      >
        <Footer />
      </div>
    </section>
  );
}
