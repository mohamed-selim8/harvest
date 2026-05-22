import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// router
import { createBrowserRouter, RouterProvider } from "react-router";
// context
import { AllApiData } from "./ApiData/AllApiData";
// scroll to top
import ScrolltoTop from "react-scroll-to-top";
// cart provider
import { CartProvider } from "react-use-cart";
import { Refresh } from "./components/context/Refresh";

// lazy loading
let LazyAbout = React.lazy(() => import("./components/AboutUs/AboutUs"));
let LazyContact = React.lazy(() => import("./components/Contact/Contact"));
let LazyProcess = React.lazy(() => import("./components/MyProcess/OurProcess"));
let LazyAllProduct = React.lazy(
  () => import("./components/AllProducts/Allproduct"),
);
let LazyAllProcess = React.lazy(
  () => import("./components/Our_Process/AllProcess"),
);
let LazyFruit = React.lazy(() => import("./components/Fruits/Fruits"));
let LazySeafood = React.lazy(() => import("./components/SeaFood/SeaFood"));
let LazyDairy = React.lazy(() => import("./components/Dairy/Dairy"));
let LazyCart = React.lazy(() => import("./components/Cart/Cart"));
let LazyFav = React.lazy(() => import("./components/FavoItems/Favo"));

// routers
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fruits",
    element: (
      <React.Suspense fallback="fruits is loading....">
        <LazyFruit />
      </React.Suspense>
    ),
  },
  {
    path: "/dairy",
    element: (
      <React.Suspense fallback="dairies is loading....">
        <LazyDairy />
      </React.Suspense>
    ),
  },
  {
    path: "/seaFood&meat",
    element: (
      <React.Suspense fallback="sea_food is loading....">
        <LazySeafood />
      </React.Suspense>
    ),
  },
  {
    path: "/allProducts",
    element: (
      <React.Suspense fallback="products loading....">
        <LazyAllProduct />
      </React.Suspense>
    ),
  },
  {
    path: "/process",

    element: (
      <React.Suspense fallback="All_process loading....">
        <LazyAllProcess />
      </React.Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <React.Suspense>
        <LazyCart />
      </React.Suspense>
    ),
  },
  {
    path: "/favo",
    element: (
      <React.Suspense>
        <LazyFav />
      </React.Suspense>
    ),
  },

  {
    path: "/about",

    element: (
      <React.Suspense fallback="About loading....">
        <LazyAbout />
      </React.Suspense>
    ),
  },
  {
    path: "/connect",

    element: (
      <React.Suspense fallback="contact loading....">
        <LazyContact />
      </React.Suspense>
    ),
  },
  {
    path: "/ourProcess",

    element: (
      <React.Suspense fallback="processing loading....">
        <LazyProcess />
      </React.Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Refresh>
      <AllApiData>
        <ScrolltoTop className="rounded-pill shadow hover" smooth />
        <RouterProvider router={router} />
      </AllApiData>
    </Refresh>
  </CartProvider>,
);
