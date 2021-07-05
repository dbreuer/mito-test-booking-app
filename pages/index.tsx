import Head from 'next/head'
import DialogBox from '../components/DialogBox/DialogBox'
import styles from '../styles/Home.module.scss'



export default function Home() {

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <DialogBox />
      </main>

    </div>
  )
}
