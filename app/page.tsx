import CitiesAutocomplete from "./cities-autocomplete";

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
