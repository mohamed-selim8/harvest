import React from "react";
import "./button.css";
function Button({children}) {
  return (
    <div>
      <button className="btn text-capitalize p-2 rounded-pill btn btn-warning text-white my-2">
        {children}
      </button>
    </div>
  );
}

export default Button;
