import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
}

export default async function (req) {
  const { searchParams } = new URL(req.url)
  const destination = searchParams.get("destination")
  const data = await fetch(
    new URL(`https://fmilani-tow.builtwithdark.com/?destination=${destination}`)
  ).then(res => res.json())
  const [city, _] = destination.split("-")
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: 40 }}>Guincho para {city}</span>
        </div>
        <span>
          {`R$ ${data.route.price.total.toFixed(2).replace(".", ",")}`}
        </span>
        <span style={{ fontSize: 28 }}>Pelego Auto Guincho</span>
      </div>
    ),
    {
      width: 500,
      height: 250,
    }
  )
}
