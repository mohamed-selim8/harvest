// FavoritesPage.jsx
import React from "react";
import { useFavorites } from "../Fav/Faav";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Button } from "@mui/material";

function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const { addItem } = useCart();

  // handel favorites if it empty
  if (favorites.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2 className="my-5">
          Favorite is empty, Now you can select your fav item
        </h2>
        <Link
          style={{ fontWeight: "700", padding: "10px" }}
          to="/"
          className="btn-warning rounded text-decoration-none"
        >
          Back Again
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
        <h2 className="text-center text-success mb-4">
          my fav items ({favorites.length})
        </h2>
        <Link to={"/"} className="my-3 my-md-0  ">
          <Button variant="contained" size="small" className="shadow">
            back to home
          </Button>
        </Link>
      </div>
      <div className="row">
        {favorites.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="cardd h-100 shadow">
              <img
                src={product.img}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-primary fw-bold">
                  {product.price}
                </p>
                <div className=" d-flex justify-content-between flex-md-column flex-lg-row gap-3">
                  <Button
                    className=" mb-md-3 mx-md-1 mb-lg-0"
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={() => removeFavorite(product.id)}
                  >
                    remove
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => addItem(product)}
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
