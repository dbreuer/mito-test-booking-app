import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { format } from "date-fns"
import cn from "classnames";
import Button from "../Button/Button"
import styles from './Sidebar.module.scss'
import { useSummary } from '../../hooks/useSummary';
import { checkoutFlights } from '../../store/booking/action';
import FlightInfo from '../FlightInfo/FlightInfo';

export default function Sidebar() {
  const booking = useSelector((state: any) => state.booking.booking);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const {totalCost, isLoading: isCostCalculating} = useSummary();

  const toggleFlightInfo = () => {
    const tempOpen = open;
    setOpen(!tempOpen);
  }

  const openCheckout = () => {
    dispatch(checkoutFlights(new Date().toISOString()))
  }

  return (
      <div className={styles.SideBar}>
        <div className={cn([styles.SideBar_wrapper, {
          [styles.SideBar_wrapper__open]: open,
        }])}>

          <div className={styles.SideBar_header}>
            <h4 className={styles.SideBar_header__title}>Flights</h4>
            <span className={styles.SideBar_header__total}>{totalCost}</span>
          </div>
          <div className={styles.SideBar_body}>
            {!booking?.inbound && !booking?.outbound ? <p>Choose an outbound flight</p> : <>

              { booking?.outbound && <FlightInfo {...booking?.outbound} />}

              { booking?.inbound && <FlightInfo secondary {...booking?.inbound} />}
            </>}
          </div>
        </div>
        <div className={styles.SideBar_footer} onClick={toggleFlightInfo}>
            <h3>Total</h3>
            <span>{totalCost}</span>
          </div>

        <Button key={'payment-button' + totalCost} variant="secondary" block text="Pay now" disabled={isCostCalculating || !booking?.outbound?.flightNumber} onClick={openCheckout}></Button>
      </div>
  )
}
