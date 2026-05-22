import "./Categ.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
function Categ() {
  let info = [
    {
      img: "imgs/fruits-and-veggies.png",
      name: "fruits & veggies",
      descript: `
        Free organic produce sourced diary from local farms. Explore awide
        range of seasonal fruites and crisp vegetables.
      `,
      id: uuidv4(),
      height: 100,
      path: "/fruits",
    },
    {
      img: "imgs/dairy-and-eggs.png",
      name: "dairy & eggs",
      descript: `
           Wholesome diary products and free range-eggs. From creamy milk and
            yogurt to artisanal cheeses.
      `,
      id: uuidv4(),
      height: 50,
      path: "dairy",
    },
    {
      img: "imgs/meat-and-seafood.png",
      name: "meat & seafoad",
      descript: `
          High-quality, responsible sourced meat ad seaFood. Choose from cuts
          marinated option and more.
      `,
      id: uuidv4(),
      height: 100,
      path: "seaFood&meat",
    },
  ];

  return (
    <section className="container">
      <div className="row">
        {/* using prop to fill section */}
        <Shopping shop="shop" by="by" categ="category" />

        {/* render array element products */}

        {info.map((e) => {
          return (
            <div
              key={e.id}
              className="itemsss col-10 col-md-5 card col-lg-3 my-4 mx-auto py-3 text-center"
            >
              <img className={`w-100 h-${e.height}`} src={e.img} alt="" />
              <h2 className="mt-3">{e.name}</h2>
              <p className="text-black-50 my-3">{e.descript}</p>
              <Link
                to={`${e.path}`}
                className="btn text-decoration-none text-capitalize p-1 rounded-pill btn-warning text-white"
              >
                show all
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Shopping({ shop, by, categ }) {
  return (
    <div className="col-12 m-auto">
      <h1 className="text-center mt-5 mb-3 text-capitalize">
        <span className="text-warning">{shop}</span>{" "}
        <span className="text-lowercase">{by}</span>{" "}
        <span className="line text-capitalized">{categ}</span>
      </h1>
    </div>
  );
}

export { Categ, Shopping };
