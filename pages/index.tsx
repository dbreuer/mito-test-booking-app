import Head from 'next/head'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DialogBox from '../components/DialogBox/DialogBox'
import styles from '../styles/Home.module.scss'



export default function Home() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
    </MuiPickersUtilsProvider>
  )
}
