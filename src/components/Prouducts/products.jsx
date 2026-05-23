// main file css for this component
import "./products.css";

// external components
import { Shopping } from "../Catagories/Categ";

// link navigation
import { Link } from "react-router-dom";

// material icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

// hooks
import { useContext, useEffect, useState, useMemo } from "react";
import { useFavorites } from "../Fav/Faav";

// context data
import { Data } from "../../ApiData/AllApiData";

// use cart
import { useCart } from "react-use-cart";

// custom component
function Products() {
  let btns = ["all", "fruit", "vegetables", "dairy", "seaFood"];

  // products from context
  let ProductsList = useContext(Data);

  // fav hook
  const { favorites, isFavorite, addFavorite, removeFavorite } = useFavorites();

  // to see favorites items selection
  useEffect(() => {
    console.log(" curr fav:", favorites);
  }, [favorites]);

  /*start states management*/

  // state to btn filteration
  let [showFilter, setFilter] = useState("all");

  // state to search input
  let [readVal, setVal] = useState("");

  /*end states management*/

  // filteration logic

  let fruites = useMemo(() => {
    return ProductsList.filter((e) => {
      return e.category === showFilter;
    });
  }, [ProductsList, showFilter]);

  let dairies = useMemo(() => {
    return ProductsList.filter((e) => {
      return e.category === showFilter;
    });
  }, [ProductsList, showFilter]);

  let seafoods = useMemo(() => {
    return ProductsList.filter((e) => {
      return e.category === showFilter;
    });
  }, [ProductsList, showFilter]);

  let vegetables = useMemo(() => {
    return ProductsList.filter((e) => {
      return e.category === showFilter;
    });
  }, [ProductsList, showFilter]);

  let AllProd = ProductsList; // refer to btn => all

  if (showFilter === "fruit") {
    AllProd = fruites;
  } else if (showFilter === "vegetables") {
    AllProd = vegetables;
  } else if (showFilter === "dairy") {
    AllProd = dairies;
  } else if (showFilter === "seaFood") {
    AllProd = seafoods;
  }

  // ===End filteration logic

  let result = btns.map((e) => {
    return (
      <Button
        size="small"
        variant="outlined"
        className={`my-5 mx-2 ${showFilter === e ? "bg-warning text-white shadow" : ""}`}
        key={e}
        onClick={() => {
          setFilter(e);
        }}
      >
        {e}
      </Button>
    );
  });

  // add item to cart
  let { addItem, inCart } = useCart();

  return (
    <section className="container">
      <div className="row">
        {/* prop section */}
        <div className="col-12 my-4">
          <Shopping shop={"our"} categ={"products"} />
        </div>

        {/* buttons filter */}
        <div className="col-12 text-center">{result}</div>

        {/* input for search */}
        <div className="col-12 my-3 d-flex position-relative">
          <input
            placeholder="fast search"
            type="text"
            value={readVal}
            onChange={(val) => {
              setVal(val.target.value);
            }}
            className="form-control col-11 col-md-5 m-auto shadow border-warning rounded"
            style={{ outline: "none" }}
          />
        </div>

        {/* fill product from external component */}
        {AllProd.length === 0 ? (
          <h1>no items exist to shopping</h1>
        ) : (
          AllProd.map((e) => {
            //  تحقق إذا كان هذا المنتج في المفضلة
            const isProductFavorite = isFavorite(e.id);

            //  دالة لتبديل حالة المفضلة
            const handleToggleFavorite = () => {
              if (isProductFavorite) {
                removeFavorite(e.id);
              } else {
                // نمرر المنتج كاملاً للتخزين
                addFavorite(e);
              }
            };

            return readVal === "" ? (
              // products card
              <div
                key={e.id}
                className="card shadow prodItems  my-3 mx-auto text-center "
              >
                <div className="icons p-3 d-flex align-items-center justify-content-between">
                  {/* fav style */}
                  {isProductFavorite ? (
                    <FavoriteIcon
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={handleToggleFavorite}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleToggleFavorite}
                    />
                  )}

                  {/* to do */}
                  {
                    <AddIcon
                      className="bg-warning rounded "
                      style={{ cursor: "pointer" }}
                    />
                  }
                </div>
                <img
                  src={e.img}
                  className={`prodEmo w-75  m-auto py-${e.pad} my-${e.mar}`}
                  alt=""
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className=" card-body">
                  <p
                    className={`my-${e.mar} text-capitalize`}
                    style={{ fontWeight: "700" }}
                  >
                    {e.title}
                  </p>
                  <h5 className="mb-3">${e.price}</h5>
                  {inCart(e.id) ? (
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      disabled={true}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      sx={{ fontWeight: "700", outline: "none" }}
                      size="small"
                      // variant="outlined"
                      className="w-50 m-auto  text-capitalize p-2 rounded-pill bg-warning text-white  "
                      onClick={() => addItem(e)}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            ) : Number(readVal) === e.price ? (
              // products card
              <div
                key={e.id}
                className="card shadow prodItems  my-3 mx-auto text-center "
              >
                <div className="icons p-3 d-flex align-items-center justify-content-between">
                  {/* fav style */}
                  {isProductFavorite ? (
                    <FavoriteIcon
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={handleToggleFavorite}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleToggleFavorite}
                    />
                  )}

                  {/* to do */}
                  {
                    <AddIcon
                      className="bg-warning rounded "
                      style={{ cursor: "pointer" }}
                    />
                  }
                </div>
                <img
                  src={e.img}
                  className={`prodEmo w-75  m-auto py-${e.pad} my-${e.mar}`}
                  alt=""
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className=" card-body">
                  <p
                    className={`my-${e.mar} text-capitalize`}
                    style={{ fontWeight: "700" }}
                  >
                    {e.title}
                  </p>
                  <h5 className="mb-3">${e.price}</h5>
                  {inCart(e.id) ? (
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      disabled={true}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      sx={{ fontWeight: "700", outline: "none" }}
                      size="small"
                      // variant="outlined"
                      className="w-50 m-auto  text-capitalize p-2 rounded-pill bg-warning text-white  "
                      onClick={() => addItem(e)}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            ) : e.category.toLowerCase().indexOf(readVal.toLowerCase()) !==
              -1 ? (
              // products card
              <div
                key={e.id}
                className="card shadow prodItems   my-3 mx-auto text-center "
              >
                <div className="icons p-3 d-flex align-items-center justify-content-between">
                  {/* fav style */}
                  {isProductFavorite ? (
                    <FavoriteIcon
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={handleToggleFavorite}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleToggleFavorite}
                    />
                  )}

                  {/* to do */}
                  {
                    <AddIcon
                      className="bg-warning rounded "
                      style={{ cursor: "pointer" }}
                    />
                  }
                </div>
                <img
                  src={e.img}
                  className={`prodEmo w-75  m-auto py-${e.pad} my-${e.mar}`}
                  alt=""
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className=" card-body">
                  <p
                    className={`my-${e.mar} text-capitalize`}
                    style={{ fontWeight: "700" }}
                  >
                    {e.title}
                  </p>
                  <h5 className="mb-3">${e.price}</h5>
                  {inCart(e.id) ? (
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      disabled={true}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      sx={{ fontWeight: "700", outline: "none" }}
                      size="small"
                      // variant="outlined"
                      className="w-50 m-auto  text-capitalize p-2 rounded-pill bg-warning text-white  "
                      onClick={() => addItem(e)}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            ) : e.title.toLowerCase().indexOf(readVal.toLowerCase()) !== -1 ? (
              // products card
              <div
                key={e.id}
                className="card shadow prodItems  my-3 mx-auto text-center "
              >
                <div className="icons p-3 d-flex align-items-center justify-content-between">
                  {/* fav style */}
                  {isProductFavorite ? (
                    <FavoriteIcon
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={handleToggleFavorite}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleToggleFavorite}
                    />
                  )}

                  {/* to do */}
                  {
                    <AddIcon
                      className="bg-warning rounded "
                      style={{ cursor: "pointer" }}
                    />
                  }
                </div>
                <img
                  src={e.img}
                  className={`prodEmo w-75  m-auto py-${e.pad} my-${e.mar}`}
                  alt=""
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className=" card-body">
                  <p
                    className={`my-${e.mar} text-capitalize`}
                    style={{ fontWeight: "700" }}
                  >
                    {e.title}
                  </p>
                  <h5 className="mb-3">${e.price}</h5>
                  {inCart(e.id) ? (
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      disabled={true}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      sx={{ fontWeight: "700", outline: "none" }}
                      size="small"
                      // variant="outlined"
                      className="w-50 m-auto  text-capitalize p-2 rounded-pill bg-warning text-white  "
                      onClick={() => addItem(e)}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              ""
            );
          })
        )}
      </div>

      <div className="d-flex">
        <div className="col-6  text-center my-3">
          <Button className="bg-success">
            <Link
              to={"/allProducts"}
              className="text-decoration-none text-capitalize text-white"
            >
              view all
            </Link>
          </Button>
        </div>

        {/* fav */}
        <div className="col-6  text-center my-3">
          <Button className="bg-success">
            <Link
              to={"/favo"}
              className="text-decoration-none text-white text-capitalize"
            >
              All fav ({favorites.length})
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Products;
