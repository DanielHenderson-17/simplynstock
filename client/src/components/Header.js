import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const Header = (props) => {
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stock/dashboard")
      .then((res) => {
        setTotalCost(res.data.totalCost);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className="item2">
        <h1>Simply N Stock</h1>
      </header>
      <header className="item3">
        <h2>Inventory Summary</h2>
        <div className="invSum">
          <h3>Total Cost</h3>
          <p>
            ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
