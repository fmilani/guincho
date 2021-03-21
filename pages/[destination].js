import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Share from '../components/Share'
import Route from '../components/Route'

function formatTime(time) {
  const hours = Math.floor(time / 3600).toString()
  const minutes = Math.floor((time % 3600) / 60).toString()
  const hh = hours.length < 2 ? `0${hours}` : hours
  const mm = minutes.length < 2 ? `0${minutes}` : minutes
  return `${hh}h${mm}m`
}
export default function Destination({ data }) {
  const router = useRouter()
  const { destination } = router.query

  const Value = ({ children }) => (
    <span
      style={{ fontSize: "1.25rem", display: "inline-block", marginTop: 10 }}
    >
      <b>{children}</b>
    </span>
  )

  function PriceDetailItem({ label, price }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        textDecoration: price > 0 ? "none" : "line-through",
      }}
    >
      <span>{label}:</span>
      <span>{`R$ ${price.toFixed(2).replace(".", ",")}`}</span>
    </li>
  )
}
  function onShareClick() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: document.location.href,
      }).then(() => {
        // success
      })
      .catch(console.error);
    } else {
      // fallback
    }
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (data.error) {
    return (
      <>
        <h3>Ocorreu um erro ao calcular o frete.</h3>
        <h4>Já estamos resolvendo</h4>
        <h5>Tente novamente em alguns minutos</h5>
      </>
    )
  }

  const { route } = data
  return (
    <Layout
      title={`${destination} | Pelego Auto Guincho`}
      description={`Valor do frete para ${destination}`}
    >
        <h1 style={{marginBottom: 0}}>{destination.split(" - ")[0]}</h1>
        <h3 style={{marginTop: 8}}>{destination.split(" - ")[1]}</h3>
        <Route link={route.link}/>
        <div
      style={{
        width: "100%",
        fontSize: "1.1rem",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 32,
      }}
    >
      <div>
        Distância<sup>*</sup>:
        <br />
        <Value>{`${route.distance} Km`}</Value>
      </div>
      <div>
        Tempo<sup>*</sup>:
        <br />
        <span>
          <Value>{formatTime(route.duration)}</Value>
        </span>
      </div>
    </div>
        <div style={{
          fontStyle: "italic",
          marginTop: 10,
          width: "100%",
          textAlign: "right"
        }}>
          <sup>*</sup>Considerando a ida e a volta.
        </div>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ul
      style={{
        width: "100%",
        marginTop: 10,
        marginLeft: 0,
        fontSize: "1.1rem",
      }}
    >
      <div className={styles.separator}>Preço</div>
      <PriceDetailItem label="Saída" price={route.price.min} />
      <PriceDetailItem label="Km rodado" price={route.price.km} />
      <PriceDetailItem label="Pedágios" price={route.price.toll} />
      <hr />
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <b style={{ fontSize: "1.5rem" }}>Total:</b>
        <b style={{ fontSize: "2rem" }}>{`R$ ${route.price.total.toFixed(2).replace(".", ",")}`}</b>
      </li>
      <hr />
    </ul>
        </div>
      <button onClick={onShareClick} >
        Compartilhar
        <Share />
      </button>
      <Link href="/">
        <a style={{marginTop: 16, textDecoration: 'underline'}}>Voltar</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  if (params.destination.includes(".php")) {
    return {props: { data: {error: true}}}
  }
  const response = await fetch(
    new URL(`https://fmilani-tow.builtwithdark.com/?destination=${params.destination}`)
  )
  const data = await response.json()
  return { props: { data } }
}
