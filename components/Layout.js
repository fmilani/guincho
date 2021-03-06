import Link from 'next/link'
import Head from 'next/head'
import Facebook from './Facebook'
import Whatsapp from './Whatsapp'
import styles from '../styles/Home.module.css'

export default function Layout({
  children,
  title = 'Pelego Auto Guincho',
  description = 'Calcule o valor do seu frete',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    <header
    style={{
      color: 'white',
      background: `#2f3931`,
    }}
  >
    <div
      style={{
        padding: `1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link href="/">
          Pelego Auto Guincho
        </Link>
      </h1>
    </div>
  </header>

    <div className={styles.container}>
      <main className={styles.main}>
      {children}
      </main>
    </div>

      <footer className={styles.footer}>
        <span style={{marginBottom: 8}}>Entre em contato:</span>
        <div style={{display:"flex"}}>
          <Facebook />
          <Whatsapp />
        </div>
      </footer>
    </div>
  )
}
