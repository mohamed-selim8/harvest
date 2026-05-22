import { createContext, useState } from "react";
import { useCart } from "react-use-cart";
let Refresher = createContext();

function Refresh({ children }) {
  let { totalItems } = useCart();

  // refresh
  let [refresh, setRef] = useState(totalItems);

  return (
    <Refresher.Provider value={{ refresh, setRef }}>
      {children}
    </Refresher.Provider>
  );
}

export { Refresh, Refresher };
