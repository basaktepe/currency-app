import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const apiKey = import.meta.env.VITE_API_KEY;

function Currency() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [amount, setAmount] = useState();
  const [result, setResult] = useState(0);

  const handleExchange = async () => {
    // console.log(amount);
    // console.log(baseCurrency);
    // console.log(toCurrency);
    const res = await axios.get(
      `${BASE_URL}?apikey=${apiKey}&base_currency=${baseCurrency}`
    );
    const result = (res.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div
        style={{
          fontFamily: "Arial",
          backgroundColor: "black",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3>CURRENCY APP </h3>
      </div>
      <div style={{ marginTop: "1.5625rem" }}>
        <input
          value={amount}
          type="number"
          className="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight
          style={{
            fontSize: "1.5625rem",
            color: "#fff",
            marginRight: ".625rem",
            marginTop: ".625rem",
          }}
        />

        <select
          className="to-currency-option"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          type="number"
          className="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div>
        <button className="exchange-button" onClick={handleExchange}>
          Exchange
        </button>
      </div>
    </div>
  );
}

export default Currency;
