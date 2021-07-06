import DialogBox from '../components/DialogBox/DialogBox'
import styles from '../styles/Home.module.scss'

type HomeProps = {
  stations: any[]
}

export default function Home(props: HomeProps ) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <DialogBox {...props} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_API_URL}/asset/stations`)
  const stationsReponse = await res.json()
  const stations = stationsReponse.map((item: any) => ({ label: item.shortName, value: item.iata, ...item }))

  return {
    props: {
      stations,
    },
  }
}
