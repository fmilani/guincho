import { Metadata } from "next";
import Share from "../share";

function formatTime(time: number) {
  const hours = Math.floor(time / 3600).toString();
  const minutes = Math.floor((time % 3600) / 60).toString();
  const hh = hours.length < 2 ? `0${hours}` : hours;
  const mm = minutes.length < 2 ? `0${minutes}` : minutes;
  return `${hh}h ${mm}m`;
}

function formatPrice(price: number) {
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
}
type MetadataProps = {
  params: { destination: string };
};
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { destination } = params;
  return {
    title: `${decodeURI(destination)} | Pelego Guincho`,
    openGraph: {
      title: "Pelego Auto Guincho",
      description: `Valor do frete para ${decodeURI(destination)}`,
      images: [
        `http${process.env.VERCEL_ENV === "development" ? "" : "s"}://${
          process.env.VERCEL_URL
        }/api/og?destination=${destination}`,
      ],
      type: "website",
      locale: "pt_BR",
      siteName: "pelegoguincho.com.br",
    },
  };
}

export default async function Destination({ params: { destination } }: any) {
  const response = await fetch(
    new URL(
      `https://fmilani-tow.builtwithdark.com/?destination=${destination}`
    )
  );
  const { route } = await response.json();
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-center text-xl font-bold">
          {decodeURI(destination).split("-")[0]}
        </h1>
        <h3 className="text-center">{decodeURI(destination).split("-")[1]}</h3>
      </div>
      {
        response.status === 503
        ? <div className="bg-white drop-shadow-sm rounded-lg p-4 flex flex-col gap-2">
            <p className="font-bold">O serviço está indisponível.</p>
            <p>Aguarde uns instantes e tente novamente.</p></div>
        : (<>      <div>
        <div className="bg-white drop-shadow-sm rounded-lg p-4 flex justify-between flex-wrap">
          <div className="flex flex-col gap-0.5">
            <span>
              Distância<sup>1</sup>
            </span>
            <span className="text-lg font-bold">{route.distance} Km</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-right">
              Tempo<sup>1</sup>
            </span>
            <span className="text-lg font-bold">
              {formatTime(route.duration)}
            </span>
          </div>
        </div>
        <div className="w-full text-right text-xs italic mt-2 px-4">
          <sup>1</sup>considerando a ida e a volta
        </div>
      </div>
      <div>
        <div className="bg-white drop-shadow-sm rounded-lg p-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Saída</span>
            <span className="font-bold">{formatPrice(route.price.min)}</span>
          </div>
          <div className="flex justify-between">
            <span>
              Km rodados<sup>2</sup>
            </span>
            <span className="font-bold">{formatPrice(route.price.km)}</span>
          </div>
          <div className="flex justify-between">
            <span>Pedágios</span>
            <span className="font-bold">{formatPrice(route.price.toll)}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-xl font-bold">
              {formatPrice(route.price.total)}
            </span>
          </div>
        </div>
        <div className="w-full text-right text-xs italic mt-2 px-4">
          <sup>2</sup>
          {formatPrice(route.price.per_km)} por km rodado
        </div>
      </div>
      <div className="flex justify-center gap-2 font-bold">
        <a
          href={route.link}
          target="_blank"
          rel="noopener roreferrer nofollow"
          className="border border-slate-500 text-slate-500 rounded-lg px-4 py-2 text-sm"
        >
          VER ROTA
        </a>
        <Share destination={destination} />
      </div>
</>)
      }
    </div>
  );
}
