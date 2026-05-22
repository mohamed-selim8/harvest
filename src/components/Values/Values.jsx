import "./values.css";
import { Shopping } from "../Catagories/Categ";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { v4 as uuidv4 } from "uuid";

function Values() {
  let values1 = [
    {
      id: uuidv4(),
      desc: `it's along established fact tht a reader will be distracted by
        the readable`,
      title: "trust",
      compo: <FavoriteOutlinedIcon className="text-white " />,
      img: "",
    },
    {
      id: uuidv4(),
      desc: `Fresh food bursts with natural flavor and vital nutrients, picked at peak ripeness for your table.`,
      title: "always fresh",
      compo: <EnergySavingsLeafOutlinedIcon className="text-white" />,
      img: "",
    },
  ];
  let values2 = [
    {
      id: uuidv4(),
      desc: `Safety in food involves strict handling and preparation to prevent contamination and ensure well-being.`,
      title: "food safety",
      compo: <SafetyCheckOutlinedIcon className="text-white" />,
    },
    {
      id: uuidv4(),
      desc: `Organic products are grown without synthetic pesticides, promoting ecological balance and healthier consumption.`,
      title: "100% organic",
      compo: <SpaOutlinedIcon className="text-white" />,
    },
  ];
  return (
    <section className="container my-4">
      <div className="row">
        {/* section by props reusable */}
        <Shopping shop={"our"} categ={"values"} />

        {/* values */}
        <div className="col-10 col-md-5 col-lg-3 m-auto">
          {/* set val as a static hard code => sample of old code */}
          {/* <div className="itm1 text-center mb-4">
            <h1 className="text-capitalize">trust</h1>
            <div className="d-flex align-items-center flex-column flex-sm-row">
              <p className="mx-2 text-black-50">
                it`s along established fact tht a reader will be distracted by
                the readable
              </p>
              <i className="rounded-pill bg-warning p-1">
                <FavoriteOutlinedIcon className="text-white" />
              </i>
            </div>
          </div> */}
          {values1.map((e) => {
            return (
              <div key={e.id}>
                <div className="itm1 text-center mb-4">
                  <h1 className="text-capitalize">{e.title}</h1>
                  <div className="d-flex align-items-center flex-md-row  flex-sm-row-reverse p-1 flex-column-reverse">
                    <p className="mx-2 text-black-50">{e.desc}</p>
                    <i className="rounded-pill bg-warning p-1">{e.compo}</i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* start image between values */}
        <div className="col-10 col-md-5 col-lg-3 m-auto py-4 py-md-0">
          <div className="img1">
            <img
              src="imgs/basket-full-vegetables.png"
              className="w-100 h-100"
              alt=""
            />
          </div>
        </div>
        {/* end image between values */}

        <div className="col-10 col-md-5 col-lg-3 m-auto">
          <div className="itm2">
            {values2.map((e) => {
              return (
                <div key={e.id} className="itm2 text-center mb-5">
                  <h1 className="text-capitalize">{e.title}</h1>
                  <div className="d-flex align-items-center flex-md-row-reverse  flex-sm-row p-1 flex-column-reverse">
                    <i className="rounded-pill bg-warning p-1">{e.compo}</i>
                    <p className="mx-2 text-black-50">{e.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
