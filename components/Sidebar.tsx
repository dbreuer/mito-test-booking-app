import Button from "./Button/Button"
import styles from './Sidebar.module.scss'

export default function Sidebar() {
  return (
    <>
      <div className={styles.SideBar}>
        <div className={styles.SideBar_wrapper}>

          <div className={styles.SideBar_header}>
            <h4 className={styles.SideBar_header__title}>Flights</h4>
            <span className={styles.SideBar_header__total}>$0</span>
          </div>
          <div className={styles.SideBar_body}>
            <p>Choose an outbound flight</p>
          </div>
          <div className={styles.SideBar_footer}>
            <h3>Total</h3>
            <span>$0</span>
          </div>
        </div>

        <Button variant="secondary" text="Pay now" disabled={true} onClick={() => { }}></Button>
      </div>
    </>
  )
}
