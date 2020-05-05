import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Cities from "../components/cities"
import PriceDetails from "../components/price-details"
import SEO from "../components/seo"
import formatMoney from "../functions/format-money"

function Value({ children }) {
  return (
    <span style={{ fontSize: "1.75rem", display: "inline-block", margin: 10 }}>
      <b>{children}</b>
    </span>
  )
}

function DisplayFare({ fare }) {
  return (
    <span style={{ fontSize: "2.5rem", display: "inline-block", margin: 10 }}>
      <b>{formatMoney(fare)}</b>
    </span>
  )
}

const IndexPage = () => {
  const [destination, setDestination] = useState("")
  const [route, setRoute] = useState(null)
  useEffect(() => {
    if (!destination) return
    async function fetchData() {
      const response = await fetch(
        `https://fmilani-tow.builtwithdark.com/?destination=${destination}`
      )
      const data = await response.json()
      setRoute(data)
    }

    fetchData()
  }, [destination])
  return (
    <Layout>
      <SEO title="Home" />
      <h1></h1>
      <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
        <Cities onChange={city => setDestination(city)} />
        {route ? (
          <>
            <div
              style={{
                marginTop: 30,
                fontSize: "1.1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                Distância:
                <br />
                <Value>{route.distance}</Value>
              </div>
              <div>
                Tempo total:
                <br />
                <Value>{route.duration}</Value>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PriceDetails
                priceDetails={[
                  { label: "Km rodado", price: route.fare },
                  { label: "Pedágios", price: route.fare },
                ]}
              />
              <div style={{ fontSize: "2rem" }}>Total:</div>
              <div style={{ marginTop: 10 }}>
                <DisplayFare fare={route.fare} />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Layout>
  )
}

export default IndexPage
