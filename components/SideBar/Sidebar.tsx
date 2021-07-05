import { useSelector, useDispatch } from 'react-redux'
import { format, addDays, subDays } from "date-fns"
import Button from "../Button/Button"
import styles from './Sidebar.module.scss'

export default function Sidebar() {
  const booking = useSelector((state: any) => state.booking.booking);
  return (
    <>
      <div className={styles.SideBar}>
        <div className={styles.SideBar_wrapper}>

          <div className={styles.SideBar_header}>
            <h4 className={styles.SideBar_header__title}>Flights</h4>
            <span className={styles.SideBar_header__total}>${booking?.inbound?.price + booking?.outbound?.price}</span>
          </div>
          <div className={styles.SideBar_body}>
            {!booking?.inbound || !booking?.outbound ? <p>Choose an outbound flight</p> : <>

              <p>
                <span className={styles.SideBar_infoDate}>
                  <span className={styles.SideBar_infoDate__month}>{format(new Date(booking?.outbound?.departure), 'MMM')}</span>
                  <span className={styles.SideBar_infoDate__day}>{format(new Date(booking?.outbound?.departure), 'dd')}</span>
                </span>


                {booking?.outbound?.origin?.shortName} - {booking?.outbound?.destination?.shortName}<br/>
                <small>
                  {format(new Date(booking?.outbound?.departure), 'HH:mm')}
                  {' - '}
                  {format(new Date(booking?.outbound?.arrival), 'HH:mm')}
                </small>
              </p>

              <p>
                <span className={styles.SideBar_infoDate}>
                  <span className={styles.SideBar_infoDate__month}>{format(new Date(booking?.inbound?.departure), 'MMM')}</span>
                  <span className={styles.SideBar_infoDate__day}>{format(new Date(booking?.inbound?.departure), 'dd')}</span>
                </span>
                {booking?.inbound?.origin?.shortName} - {booking?.inbound?.destination?.shortName}<br/>
                <small>
                  {format(new Date(booking?.inbound?.departure), 'HH:mm')}
                  {' - '}
                  {format(new Date(booking?.inbound?.arrival), 'HH:mm')}
                </small>
              </p>
            </>}
          </div>
          <div className={styles.SideBar_footer}>
            <h3>Total</h3>
            <span>${booking?.inbound?.price + booking?.outbound?.price}</span>
          </div>
        </div>

        <Button variant="secondary" block text="Pay now" disabled={!booking?.inbound || !booking?.outbound} onClick={() => { }}></Button>
      </div>
    </>
  )
}
