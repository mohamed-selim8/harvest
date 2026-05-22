import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useCart } from "react-use-cart";
import AllCart from "../Cart/Cart";
import { useFavorites } from "../Fav/Faav";
export default function Navbar() {
  // state for menu in mobile
  let [showMenu, setMenu] = useState(false);

  // state for cart sec
  let [hide, setVal] = useState(false);

  // cart total items
  let { totalItems } = useCart();
  console.log(totalItems);

  // total favorites
  const { favorites } = useFavorites();
  console.log(favorites);

  return (
    <div className="">
      <header className="container mb-5 pb-5">
        <nav className="navbar px-5 fixed-top shadow m-auto d-flex justify-content-between align-items-center py-4">
          <Link
            to={"/"}
            className="logo text-decoration-none"
            onClick={() => {
              window.scrollTo({
                top: "0",
                behavior: "smooth",
              });
            }}
          >
            Har<span className="text-warning text-uppercase">v</span>est
          </Link>

          {/* navigation section */}
          <ul className="nav d-flex list-unstyled text-capitalize ">
            <li className="d-none d-md-block">
              <Link className="itemss text-decoration-none " to="/">
                home
              </Link>
            </li>
            <li className="d-none d-md-block">
              <Link className="items text-decoration-none" to="/about">
                about us
              </Link>
            </li>
            <li className="d-none d-md-block">
              <Link className="items text-decoration-none" to="/ourProcess">
                process
              </Link>
            </li>
            <li className="d-none d-md-block">
              <Link className="items text-decoration-none" to="/connect">
                contact us
              </Link>
            </li>
          </ul>

          {/* cart section */}
          <div className="carts d-flex align-items-center justify-content-between ">
            <div className="d-flex align-items-center">
              <Link to="/favo">
                <FavoriteIcon
                  className="text-warning d-none d-sm-block"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <p
                className="bg-warning text-white shadow d-none d-sm-block d-sm-flex align-items-center justify-content-center rounded-pill"
                style={{ width: "20px", height: "20px" }}
              >
                {favorites.length}
              </p>
            </div>

            <div className="d-flex  ">
              <Link className="d-flex align-items-center">
                <ShoppingCartIcon
                  className="text-warning d-none d-sm-block"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setVal(!hide);
                    setMenu(false);
                  }}
                />
              </Link>
              <p
                className="bg-warning text-white shadow d-none d-sm-block d-sm-flex align-items-center justify-content-center rounded-pill"
                style={{ width: "20px", height: "20px" }}
              >
                {totalItems}
              </p>
            </div>
            <Link className="d-block d-md-none">
              {showMenu ? (
                <DragHandleIcon
                  className="text-warning"
                  style={{ cursor: "pointer", fontSize: "25px" }}
                  onClick={() => {
                    setMenu(!showMenu);
                    setVal(false);
                  }}
                />
              ) : (
                <MenuIcon
                  className="text-warning"
                  style={{ cursor: "pointer", fontSize: "25px" }}
                  onClick={() => {
                    setMenu(!showMenu);
                    setVal(false);
                  }}
                />
              )}
            </Link>
          </div>
        </nav>

        {/* mobile menu */}
        <div
          className=" position-fixed w-100 navParent"
          style={{
            zIndex: "10",
            marginTop: "78px",
          }}
        >
          {showMenu ? (
            <div className="menu ">
              <ul
                className={`nav-mob  d-flex flex-column list-unstyled text-capitalize w-75  py-4 mt-3 text-center d-md-none`}
              >
                <li className="d-flex justify-content-between">
                  <span></span>
                  <Link
                    to="/"
                    className="itemss text-decoration-none d-md-none "
                  >
                    home
                  </Link>
                  <span className="bg-danger rounded-pill text-white">
                    <CloseIcon
                      className=" pointer-event"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setMenu(!showMenu);
                      }}
                    />
                  </span>
                </li>
                <li>
                  <Link
                    className="items text-decoration-none d-md-none"
                    to="/about"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    className="items text-decoration-none d-md-none"
                    to="/ourProcess"
                  >
                    process
                  </Link>
                </li>
                <li>
                  <Link
                    className="items text-decoration-none d-md-none"
                    to="/connect"
                  >
                    contact us
                  </Link>
                </li>

                {/* fav and cart items */}
                <li className="d-flex align-items-center  justify-content-around bg-danger py-2 rounded">
                  <div className="d-flex align-items-center">
                    <Link to="/favo">
                      <FavoriteIcon
                        className="text-warning "
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                    <p
                      className="bg-warning text-white text-center rounded-pill"
                      style={{ width: "23px", height: "23px" }}
                    >
                      {favorites.length}
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <Link>
                      <ShoppingCartIcon
                        className="text-warning "
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setVal(!hide);
                          setMenu(false);
                        }}
                      />
                    </Link>
                    <p
                      className="bg-warning text-white rounded-pill"
                      style={{ width: "23px", height: "23px" }}
                    >
                      {totalItems}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>

      {/* building use cart section */}
      {hide ? (
        <section
          className="w-100 d-flex justify-content-end mt-4 py-4 position-fixed "
          style={{
            position: "absolute",
            top: "8%",
            zIndex: "6",
            right: "5px",
            backdropFilter: "blur(3px)",
            height: "90vh",
          }}
        >
          <div
            className=" myCart p-lg-5  shadow "
            style={{ maxHeight: "570px", overflowY: "scroll", zIndex: "4" }}
          >
            <i style={{ position: "absolute", right: "19px", top: "25px" }}>
              <CloseIcon
                fontSize="medium"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setVal(!hide);
                }}
              />
            </i>
            <AllCart />
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
