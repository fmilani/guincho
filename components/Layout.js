import Link from 'next/link'
import Head from 'next/head'
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
