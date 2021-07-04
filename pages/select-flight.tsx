import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle'
import styles from '../styles/SelectFlight.module.scss'
import commonStyles from '../styles/Common.module.scss'
import BoundBox from '../components/BoundBox'
import Sidebar from '../components/Sidebar';

const searchResponse: any = [
  {
      "carrierCode": "W6",
      "flightNumber": "60bdd704c430370932cc5b76",
      "remainingTickets": 48,
      "departure": "2021-07-01T05:20:00+0200",
      "arrival": "2021-07-01T08:20:00+0200",
      "fares": [
          {
              "fareSellKey": "60bdd7044a773fe786f5d10a",
              "price": 69,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bdd704db921d506d49d82e",
              "price": 78,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bdd704a3a52e00878dd2bd",
              "price": 108,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bdd7045c6211258ce4fff6",
      "remainingTickets": 27,
      "departure": "2021-07-01T08:00:00+0200",
      "arrival": "2021-07-01T11:00:00+0200",
      "fares": [
          {
              "fareSellKey": "60bdd7046ea9dbb661a09619",
              "price": 52,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bdd7043ed809ab27716bba",
              "price": 60,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bdd704eba1ce120d378e5f",
              "price": 80,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bdd70436a45f714088af37",
      "remainingTickets": 47,
      "departure": "2021-07-01T11:00:00+0200",
      "arrival": "2021-07-01T14:00:00+0200",
      "fares": [
          {
              "fareSellKey": "60bdd704089d113c846acc25",
              "price": 62,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bdd704938e403380f80c1c",
              "price": 69,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bdd70472d0553000ff96e7",
              "price": 94,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bdd7043db950ffc6faed88",
      "remainingTickets": 36,
      "departure": "2021-07-01T14:40:00+0200",
      "arrival": "2021-07-01T17:40:00+0200",
      "fares": [
          {
              "fareSellKey": "60bdd704832f69d73b32b358",
              "price": 59,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bdd704e8c8cb2f43196d41",
              "price": 69,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bdd7045ef216a0f1eb7c6f",
              "price": 94,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bde2f1052659f1ec022893",
      "remainingTickets": 44,
      "departure": "2021-07-01T02:50:00+0200",
      "arrival": "2021-07-01T05:50:00+0200",
      "fares": [
          {
              "fareSellKey": "60bde2f1cf8bf0d694097d1d",
              "price": 37,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bde2f10bcf3ee25041246d",
              "price": 42,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bde2f18ac172be9615f9bc",
              "price": 64,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bde2f1c474ccb1462d4bbb",
      "remainingTickets": 37,
      "departure": "2021-07-01T06:00:00+0200",
      "arrival": "2021-07-01T09:00:00+0200",
      "fares": [
          {
              "fareSellKey": "60bde2f17a1790f729fcf3ed",
              "price": 72,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bde2f1f4e71c0b081963a2",
              "price": 80,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bde2f1af0bc2f2583b70ad",
              "price": 103,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bde2f1830846d81b1c1e83",
      "remainingTickets": 23,
      "departure": "2021-07-01T09:50:00+0200",
      "arrival": "2021-07-01T12:50:00+0200",
      "fares": [
          {
              "fareSellKey": "60bde2f10332cae895859301",
              "price": 66,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bde2f12d6095df76726880",
              "price": 76,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bde2f1a02fcf351c4226b2",
              "price": 99,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bde2f11250febd501b24bc",
      "remainingTickets": 30,
      "departure": "2021-07-01T12:30:00+0200",
      "arrival": "2021-07-01T15:30:00+0200",
      "fares": [
          {
              "fareSellKey": "60bde2f1c2196a41ba21dcc2",
              "price": 73,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bde2f1dacba907f74cde2f",
              "price": 83,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bde2f136b9a39548f03fce",
              "price": 108,
              "bundle": "plus"
          }
      ]
  },
  {
      "carrierCode": "W6",
      "flightNumber": "60bde2f1efc2d98180938551",
      "remainingTickets": 26,
      "departure": "2021-07-01T15:40:00+0200",
      "arrival": "2021-07-01T18:40:00+0200",
      "fares": [
          {
              "fareSellKey": "60bde2f1f7f3a13bd17f1928",
              "price": 75,
              "bundle": "basic"
          },
          {
              "fareSellKey": "60bde2f1de6f31a4f73d081e",
              "price": 85,
              "bundle": "standard"
          },
          {
              "fareSellKey": "60bde2f10f874155ae4b870c",
              "price": 106,
              "bundle": "plus"
          }
      ]
  }
];

export default function SelectFlight() {

  return (
  <div className={styles.container}>
    <Head>
      <title>Mito Test - Select Flight</title>
    </Head>

    <Header departure="Budapest" destination="Barcelona el Prat" />
    <main className={styles.main}>
    <div className={styles.body}>
      <PageTitle title='Select flight' icon="/flight-icon.svg" />
      <div className={commonStyles.container}>
          <div className={commonStyles.sidebar}>
            <Sidebar />
          </div>
          <div className={commonStyles.wrapper}>
            <BoundBox type="outbound" boundDate="2021-07-01" departure="Budapest" destination="Barcelona El Prat" data={searchResponse} />
            <BoundBox type="inbound" boundDate="2021-07-01" departure="Barcelona El Prat" destination="Budapest" data={searchResponse} />
          </div>
      </div>
    </div>

    </main>
  </div>
  )
}
