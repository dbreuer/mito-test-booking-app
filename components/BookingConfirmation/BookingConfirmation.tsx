import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';

import { resetBooking, cancelCheckout } from '../../store/booking/action';
import FlightInfo from '../FlightInfo/FlightInfo';
import { useSummary } from '../../hooks/useSummary';

import styles from './BookingConfirmation.module.scss'
import { BookingConfirmationProps } from '../../types';

export const BookingConfirmation = (props: BookingConfirmationProps) => {
  const booking = useSelector((state: any) => state.booking.booking);
  const dispatch = useDispatch();
  const {totalCost} = useSummary();
  const router = useRouter()

  const resetCheckout = (event: Event) => {
    event.preventDefault();
    dispatch(resetBooking());
    router.push('/');
  }

  const onBlur = () => {
    dispatch(cancelCheckout());
  }

  if (!props.open) {
    return null;
  }

  return (
    <div className={styles.BookingConfirmation}>
      <div className={styles.BookingConfirmation_overlay} onClick={onBlur}></div>
      <div className={styles.BookingConfirmation_modal}>
        <div className={styles.BookingConfirmation_header}>
          <h3  className={styles.BookingConfirmation_header__title}>Thanks for buying your tickets at mito airlines</h3>
        </div>
        <div className={styles.BookingConfirmation_body}>
          <div className={styles.BookingConfirmation_body_col}>
          { booking?.outbound && <FlightInfo {...booking?.outbound} />}
          </div>
          <div className={styles.BookingConfirmation_body_col}>
          { booking?.inbound && <FlightInfo {...booking?.inbound} />}
          </div>
        </div>
        <div className={styles.BookingConfirmation_footer}>
          <div className={styles.BookingConfirmation_footer_left}>
            <h3 className={styles.BookingConfirmation_footer__title}>Total: <span className={styles.BookingConfirmation_footer__amount}>{totalCost}</span></h3>
          </div>
          <div className={styles.BookingConfirmation_footer_right}>
            <a className={styles.BookingConfirmation_footer__link} href="#" onClick={(e: any) => resetCheckout(e)}>No, thanks (reset)</a>
          </div>
        </div>
      </div>
    </div>
  )
}


