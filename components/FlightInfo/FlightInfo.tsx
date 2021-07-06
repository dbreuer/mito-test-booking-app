import React from 'react'
import { format } from "date-fns"
import cn from "classnames";

import styles from './FlightInfo.module.scss'

import { FlightInfoProps } from '../../types';

export default function FlightInfo({secondary, departure, arrival, origin, destination }: FlightInfoProps) {
  return (
    <div className={cn([styles.FlightInfo, {
      [styles.FlightInfo__before]: secondary
    }])}>
      <span className={styles.FlightInfo_infoDate}>
        <span className={styles.FlightInfo_infoDate__month}>{format(new Date(departure), 'MMM')}</span>
        <span className={styles.FlightInfo_infoDate__day}>{format(new Date(departure), 'dd')}</span>
      </span>
    <div >
      <h5 className={styles.FlightInfo_infoText}>{origin?.shortName} - {destination?.shortName}</h5>
      <small>
        {format(new Date(departure), 'EEE')}
        {' '}
        {format(new Date(departure), 'HH:mm')}
        {' - '}
        {format(new Date(arrival), 'HH:mm')}
      </small>
    </div>
    </div>
  )
}
