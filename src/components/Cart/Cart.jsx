import "./cart.css";
import { CartProvider, useCart } from "react-use-cart";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  let { items, updateItemQuantity, totalItems, cartTotal } = useCart();

  console.log(totalItems);

  if (totalItems === 0) {
    return (
      <div>
        <img src={"imgs/download (1).jpg"} className="w-100 h-100" alt="" />
        <h1 className="text-center mt-5 text-uppercase text-warning">
          the cart is empty
        </h1>
        ;
      </div>
    );
  }

  let totally = 0;
  items.map((e) => (totally = totalItems));
  return (
    <div className="container">
      <div className="my-3 d-flex justify-content-between">
        <span
          className="text-uppercase  "
          style={{
            fontWeight: "700",
            fontSize: "19px",
            transform: "translateX(35%)",
          }}
        >
          ttl quantity: <span className="text-black-50">({totally})</span>
        </span>
      </div>
      {items.map((e) => {
        return (
          <div key={e.id}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src={e.img}
                  className=" h-50"
                  alt=""
                  style={{ objectFit: "contain", width: "100px" }}
                />
                <div className="mx-3">
                  <h5 className="text-capitalize">{e.title}</h5>
                  <p className="text-black-50" style={{ fontWeight: "500" }}>
                    per one: ${e.price}
                  </p>
                </div>
              </div>
              <p className="" style={{ fontWeight: "500" }}>
                <span>TTS:</span>{" "}
                <span className="text-black-50">
                  ${Math.round(e.quantity * e.price)}
                </span>
              </p>
            </div>

            <div className=" text-center my-3">
              <Button
                variant="outlined"
                color="success"
                size="small"
                onClick={() => {
                  updateItemQuantity(e.id, e.quantity - 1);
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <b className="mx-3">{e.quantity}</b>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                  updateItemQuantity(e.id, e.quantity + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </div>
            <Divider className="my-2" />
          </div>
        );
      })}
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th className="text-uppercase">total price</th>
              <td className="text-success" style={{ fontWeight: "700" }}>
                ${Math.round(cartTotal)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AllCart() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}
export default AllCart;
