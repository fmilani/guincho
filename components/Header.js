import Link from 'next/link'

export default function Header() {
  return (
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
  )
}
