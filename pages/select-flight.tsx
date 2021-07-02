import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/SelectFlight.module.scss'

export default function SelectFlight() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Mito Test - Select Flight</title>
    </Head>
    <main className={styles.main}>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h1>Select flight</h1>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>

      </div>
    </main>
  </div>
  )
}
