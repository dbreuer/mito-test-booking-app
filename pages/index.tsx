import Head from 'next/head'
import DialogBox from '../components/DialogBox/DialogBox'
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
        <DialogBox />
      </main>

    </div>
  )
}
