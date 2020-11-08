import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Search from '../components/search'

export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <Search onChange={city => router.push(`/${city}`)}/>
      <p>Digite no campo acima a cidade pra onde você precisa do guincho</p>
    </Layout>
  )
}
