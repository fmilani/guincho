import Link from 'next/link'
import Head from 'next/head'
import Facebook from './Facebook'
import styles from '../styles/Home.module.css'

export default function Layout({
  children,
  title = 'Pelego Auto Guincho',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    <header
    style={{
      color: 'white',
      background: `#2f3931`,
    }}
  >
    <div
      style={{
        padding: `1.45rem`,
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
        Entre em contato{' '}
          <Facebook />
      </footer>
    </div>
  )
}
