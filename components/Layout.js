import Link from "next/link"
import Head from "next/head"
import Facebook from "./Facebook"
import Whatsapp from "./Whatsapp"
import styles from "../styles/Home.module.css"

export default function Layout({
  children,
  destination,
  title = "Pelego Auto Guincho",
  description = "Calcule o valor do seu frete",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Pelego Auto Guincho" />
        <meta
          property="og:description"
          content="Guinchamos seu veículo, seja ele um automóvel ou motocicleta, com rapidez."
        />
        {destination && (
          <meta
            property="og:image"
            content={`https://pelegoguincho.com.br/api/og?destination=${destination}`}
          />
        )}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="pelegoguincho.com.br"></meta>
      </Head>
      <header
        style={{
          color: "white",
          background: `#2f3931`,
        }}
      >
        <div
          style={{
            padding: `1rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link href="/">Pelego Auto Guincho</Link>
          </h1>
        </div>
      </header>

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>

      <footer className={styles.footer}>
        <span style={{ marginBottom: 8 }}>Entre em contato:</span>
        <div style={{ display: "flex" }}>
          <Facebook />
          <Whatsapp />
        </div>
      </footer>
    </div>
  )
}
