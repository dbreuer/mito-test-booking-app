import React, { useEffect, useState } from 'react';
import Image from 'next/image'

import { KeyboardDatePicker } from "@material-ui/pickers"
import { format, addDays, subDays } from "date-fns"
import cn from "classnames";

import Button from '../Button/Button'
import styles from './BoundBox.module.scss'
import ArrovSVG from '../../public/Arrow.svg'
import CaretLeftSVG from '../../public/carat-left-icon.svg'
import CaretRightSVG from '../../public/carat-right-icon.svg'
import SmallArrowSVG from '../../public/small-arrow-icon.svg'
import { useFares } from '../../hooks/useFares';
import Placeholder from '../Placeholder/Placeholder';
import { useSelector, useDispatch } from 'react-redux'
import { addReturnDate, addInboundFlight, addOutboundFlight } from '../../store/booking/action';
import { keys } from '@material-ui/core/styles/createBreakpoints';


type BoundBoxProps = {
  type: BoundType;
  date: string | number | Date;
  origin: {
    iata: string;
    shortName: string;
  };
  destination: {
    iata: string;
    shortName: string;
  };
}

type BoundType =
  | 'outbound'
  | 'inbound';

  type FareItem = {
    fareSellKey: string;
    price: number;
    bundle: 'basic' | 'standard' | 'plus',
    isFirst?: boolean;
    onAddTicket?: any;
    active?: boolean;
  }

  type FlightTickets = {
    carrierCode: string;
    flightNumber: string;
    remainingTickets: number;
    departure: string;
    arrival: string;
    fares: FareItem[]
  }

export default function BoundBox({type, date, origin, destination}: BoundBoxProps) {
  const booking = useSelector((state: any) => state.booking.booking);
  const [boundDate, setBoundDate] = useState(date);
  const [searchDate, setSearchDate] = useState<any>();
  const dispatch = useDispatch()

  const {fares: data, isLoading} = useFares({
    departureStation: origin?.iata,
    arrivalStation: destination?.iata,
    date: boundDate,
  })

  const nextDay = () => {
    const nextDayString = format(addDays(new Date(boundDate), 1), "yyyy-MM-dd");
    setBoundDate(nextDayString);
  }

  const previousDay = () => {
    const previousDayString = format(subDays(new Date(boundDate), 1), "yyyy-MM-dd");
    setBoundDate(previousDayString);
  }

  const searchForSelectedDay = () => {
    const selectedDay = format(new Date(searchDate), "yyyy-MM-dd");
    setBoundDate(selectedDay);
    dispatch(addReturnDate(selectedDay));
  }

  const bundlePriceItem = (props: FareItem) => {
    const toggleStatus = () => {
      const {price, bundle, fareSellKey} = props
      props.onAddTicket({price, bundle, fareSellKey});
    }
    return (
      <div key={props.fareSellKey + props.active} data-ref={props.fareSellKey} className={cn([styles.Option_item, {
        [styles.Option_item__firstchild]: props.isFirst
      }])}>
      {props.isFirst && <small className={styles.Option_item__label}>{props.bundle}</small>}
      <Button block onClick={() => toggleStatus()} text={new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(props.price)} variant={props.active ? 'secondary' : 'outline'}></Button>
    </div>
    )
  }

  const fareItem = ({departure, arrival, fares, carrierCode, flightNumber}: FlightTickets, isFirst: boolean) => {
    const onAddTicket = (ticketDetails: FareItem) => {
      if (type === 'inbound') {
        dispatch(addInboundFlight({departure, arrival, carrierCode, flightNumber, origin, destination, ...ticketDetails}))
      } else {
        dispatch(addOutboundFlight({departure, arrival, carrierCode, flightNumber, origin, destination, ...ticketDetails}))
      }
    }
    return (
    <div key={departure} className={styles.Option_row}>
      <div className={styles.Option_metadata}>
      {format(new Date(departure), "HH:mm")}
      <SmallArrowSVG />
      {format(new Date(arrival), "HH:mm")}
      </div>

      {fares.map(fare => bundlePriceItem({...fare, isFirst, onAddTicket, active: booking[type].fareSellKey === fare.fareSellKey}))}

    </div>
    )
  }

  const searchBox = () => {
    return (
      <div className={styles.SearchBox}>
        <KeyboardDatePicker
          clearable
          autoOk
          value={searchDate}
          placeholder={type === 'inbound' ? 'Return' : 'Departure'}
          variant="inline"
          onChange={(date: any) => setSearchDate(date)}
          inputVariant="outlined"
          minDate={type === 'inbound' ? new Date(booking.departure) : new Date()}
          format="MM/dd/yyyy"
        />
        <Button text="Search" variant="primary" onClick={() => searchForSelectedDay()}></Button>
      </div>
    )
  }

  const renderPriceItems = () => {
    return (
      <div className={styles.BoundBox_container}>
        <div className={styles.BoundBox_navigation}>
          <button onClick={previousDay} className={styles.BoundBox_previousdate}>
            <CaretLeftSVG />
            {format(subDays(new Date(boundDate), 1), "EEE d MMMM")}
          </button>
          <div className={styles.BoundBox_selecteddate}>
            {format(new Date(boundDate), "EEEE, d MMMM yyyy")}
          </div>
          <button onClick={nextDay} className={styles.BoundBox_nextdate}>
            {format(addDays(new Date(boundDate), 1), "EEE d MMMM")}
            <CaretRightSVG />
          </button>
        </div>
        <div className="Option__list">
        {!isLoading && data.length > 0 ? data.map((item: any, index: number) => fareItem(item, index === 0)) :
        [0, 1, 2].map(item => (
        <div key={item} className={styles.Option_row}>
          <div className={styles.Option_metadata}>
            <Placeholder />
          </div>
          <div className={styles.Option_item}>
            <Placeholder />
          </div>
          <div className={styles.Option_item}>
            <Placeholder />
          </div>
          <div className={styles.Option_item}>
            <Placeholder />
          </div>
        </div>))}
        </div>
      </div>
    )
  }

    return (
      <div className={styles.BoundBox}>
        <div className={styles.BoundBox_header}>
          <div className={styles.BoundBox_header_direction}>
            <h3 className={styles.BoundBox_header_direction__title}>{type}</h3>
          </div>
          <div className={styles.BoundBox_header_info}>
            <h3 className={styles.BoundBox_header_info__title}>{origin?.shortName}</h3>
            <ArrovSVG className={styles.BoundBox_header_info__arrow} />
            <h3 className={styles.BoundBox_header_info__title}>{destination?.shortName}</h3>
          </div>
        </div>
        {date && renderPriceItems() || searchBox()}
      </div>
    )
}
