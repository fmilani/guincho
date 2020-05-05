import React from "react"
import "./price-details.css"
import formatMoney from "../functions/format-money"

function PriceDetailItem({ label, price }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{label}:</span>
      <span>{formatMoney(price)}</span>
    </li>
  )
}

function PriceDetails({ priceDetails }) {
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
      {priceDetails.map(priceDetail => (
        <PriceDetailItem key={priceDetail.label} {...priceDetail} />
      ))}
      <hr />
    </ul>
  )
}

export default PriceDetails
