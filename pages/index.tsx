import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mito Test - Booking Form</title>
        <meta name="description" content="Created by David Breuer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h1>Booking Search</h1>
            <Link href="/select-flight">
              <a>Select Flight</a>
            </Link>
          </div>

        </div>
      </main>

    </div>
  )
}
