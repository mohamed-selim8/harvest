import "./dairy.css";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banners/Banner";
import { useContext, useState } from "react";
import { Data } from "../../ApiData/AllApiData";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../Fav/Faav";
import { useCart } from "react-use-cart";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
function Dairy() {
  // all products from context
  let dairy = useContext(Data);

  // state for filteration
  let [category] = useState("dairy");

  // fav hook
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  // add item to cart
  let { addItem, inCart } = useCart();

  let results = dairy
    .filter((e) => e.category === category)
    .map((e) => {
      const isProductFavorite = isFavorite(e.id);

      const handleToggleFavorite = () => {
        if (isProductFavorite) {
          removeFavorite(e.id);
        } else {
          addFavorite(e);
        }
      };

      return (
        <div
          key={e.id}
          className="card shadow prodItems my-3 mx-auto text-center"
        >
          <div className="icons p-3 d-flex align-items-center justify-content-between">
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

            <AddIcon
              className="bg-warning rounded"
              style={{ cursor: "pointer" }}
              onClick={handleToggleFavorite}
            />
          </div>

          <img
            src={e.img}
            className={`prodEmo w-75 m-auto py-${e.pad} my-${e.mar}`}
            alt=""
            style={{ height: "200px", objectFit: "contain" }}
          />

          <div className="card-body">
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
                className="w-50 m-auto text-capitalize p-2 rounded-pill bg-warning text-white"
                onClick={() => addItem(e)}
              >
                Add to cart
              </Button>
            )}
          </div>
        </div>
      );
    });
  return (
    <section className="container-fluid">
      <Navbar />
      <Banner img={"imgs/dairy-banner.jpg"}>Dairy products</Banner>
      <div className="container">
        <div className="row">{results}</div>
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

export default Dairy;
