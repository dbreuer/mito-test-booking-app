import Head from 'next/head'
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle'
import styles from '../styles/SelectFlight.module.scss'
import commonStyles from '../styles/Common.module.scss'
import BoundBox from '../components/BoundBox/BoundBox'
import Sidebar from '../components/SideBar/Sidebar';
import { useSelector } from 'react-redux'
import { BookingConfirmation } from '../components/BookingConfirmation/BookingConfirmation';

export default function SelectFlight() {
  const booking = useSelector((state: any) => state.booking.booking);



  return (
  <div className={styles.container}>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Mito Test - Select Flight</title>
    </Head>

    <Header departure={booking.origin} destination={booking.destination} />
    <main className={styles.main}>
    <div className={styles.body}>
      <PageTitle title='Select flight' icon="/flight-icon.svg" />
      <div className={commonStyles.container}>
          <div className={commonStyles.sidebar}>
            <Sidebar />
          </div>
          <div className={commonStyles.wrapper}>
            <BoundBox
              key="outbound"
              type="outbound"
              date={booking?.departure}
              origin={booking?.origin}
              destination={booking?.destination}
            />
            <BoundBox
              key="inbound"
              type="inbound"
              date={booking?.returnDate}
              origin={booking?.destination}
              destination={booking?.origin}
            />
          </div>
      </div>
    </div>

    </main>
    <BookingConfirmation open={booking?.ready} />
  </div>
  )
}
