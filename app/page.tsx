import CitiesAutocomplete from "./cities-autocomplete";

export const metadata = {
  title: "Pelego Guincho",
  description: "Calcule o valor do seu frete",
  openGraph: {
    title: "Pelego Auto Guincho",
    description:
      "Guinchamos seu veículo, seja ele um automóvel ou motocicleta, com rapidez.",
    type: "website",
    locale: "pt_BR",
    siteName: "pelegoguincho.com.br",
  },
};

export default async function Home() {
  const data = await (
    await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
    )
  ).json();
  const cities = data.map((item: any) => ({
    city: item.nome,
    state: item.microrregiao.mesorregiao.UF.nome,
  }));
  return (
    <div>
      <CitiesAutocomplete cities={cities} />
    </div>
  );
}
