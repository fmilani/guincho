export default function DestinationHead({ params: { destination } }: any) {
  return (
    <>
      <title>{`${decodeURI(destination)} | Pelego Guincho`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:title" content="Pelego Auto Guincho" />
      <meta
        property="og:description"
        content={`Valor do frete para ${decodeURI(destination)}`}
      />
      <meta
        property="og:image"
        content={`http${
          process.env.VERCEL_ENV === "development" ? "" : "s"
        }://${process.env.VERCEL_URL}/api/og?destination=${destination}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="pelegoguincho.com.br" />
    </>
  );
}
