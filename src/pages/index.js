import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SearchCity from "../components/search-city"
import DistanceAndTime from "../components/distance-and-time.js"
import PriceDetails from "../components/price-details"
import Hint from "../components/hint"
import SEO from "../components/seo"

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
      <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
        <SearchCity
          onChange={city => setDestination(city)}
          onClear={() => setRoute(null)}
        />
        {route ? (
          <div style={{ marginTop: 40 }}>
            <DistanceAndTime distance={route.distance} time={route.duration} />
            <div style={{ fontStyle: "italic", marginTop: 10 }}>
              <sup>*</sup>Considerando a ida e a volta.
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PriceDetails price={route.price} />
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>
            <Hint />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
