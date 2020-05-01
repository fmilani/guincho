import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Cities from "../components/cities"
import SEO from "../components/seo"

function Value({ children }) {
  return (
    <span style={{ fontSize: "2rem", display: "inline-block", margin: 10 }}>
      <b>{children}</b>
    </span>
  )
}

function DisplayFare({ fare }) {
  return (
    <span style={{ fontSize: "2.5rem", display: "inline-block", margin: 10 }}>
      <b>{formatFare(fare)}</b>
    </span>
  )
}

function formatFare(fare) {
  return `R$ ${fare.toFixed(2).replace(".", ",")}`
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
                fontSize: "1.25rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>
                Distância:
                <br />
                <Value>{route.distance}</Value>
              </p>
              <p>
                Tempo total:
                <br />
                <Value>{route.duration}</Value>
              </p>
            </div>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "2rem" }}>Preço:</div>
              <div style={{ marginTop: 20 }}>
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
