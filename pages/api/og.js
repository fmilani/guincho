import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function (req) {
  const { searchParams } = new URL(req.url);
  const destination = searchParams.get("destination");
  const data = await fetch(
    new URL(`https://fmilani-tow.builtwithdark.com/?destination=${destination}`)
  ).then((res) => res.json());
  const [city, _] = destination.split("-");
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 24 }}>Guincho para</div>
          <div style={{ fontSize: 28 }}>{city}</div>
        </div>
        <span>
          {`R$ ${data.route.price.total.toFixed(2).replace(".", ",")}`}
        </span>
        <span style={{ fontSize: 20 }}>Pelego Guincho</span>
      </div>
    ),
    {
      width: 250,
      height: 250,
    }
  );
}
