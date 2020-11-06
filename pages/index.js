import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Search from '../components/search'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Header />
    <div className={styles.container}>
      <Head>
        <title>Pelego Auto Guincho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Search onChange={city => router.push(`/${city}`)}/>
        <p>Digite no campo acima a cidade pra onde você precisa do guincho</p>
      </main>

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
    </>
  )
}
