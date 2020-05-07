import React from "react"
import "./price-details.css"
import formatMoney from "../functions/format-money"

function PriceDetailItem({ label, price }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        textDecoration: price > 0 ? "none" : "line-through",
      }}
    >
      <span>{label}:</span>
      <span>{formatMoney(price)}</span>
    </li>
  )
}

function PriceDetails({ price }) {
  return (
    <ul
      style={{
        width: "100%",
        marginTop: 10,
        marginLeft: 0,
        fontSize: "1.1rem",
      }}
    >
      <div className="separator">Preço</div>
      <PriceDetailItem label="Saída" price={price.min} />
      <PriceDetailItem label="Km rodado" price={price.km} />
      <PriceDetailItem label="Pedágios" price={price.toll} />
      <hr style={{ marginBottom: "1rem" }} />
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "10px 0",
        }}
      >
        <b style={{ fontSize: "1.5rem" }}>Total:</b>
        <b style={{ fontSize: "2rem" }}>{formatMoney(price.total)}</b>
      </li>
      <hr />
    </ul>
  )
}

export default PriceDetails
