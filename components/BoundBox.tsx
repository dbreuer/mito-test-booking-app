import React from 'react';
import Image from 'next/image'

import { KeyboardDatePicker } from "@material-ui/pickers"
import { format, addDays, subDays } from "date-fns"

import Button from './Button/Button'
import styles from './BoundBox.module.scss'
import ArrovSVG from '../public/Arrow.svg'
import CaretLeftSVG from '../public/carat-left-icon.svg'
import CaretRightSVG from '../public/carat-right-icon.svg'
import SmallArrowSVG from '../public/small-arrow-icon.svg'

type BoundBoxProps = {
  type: BoundType;
  data?: FlightTickets[];
  boundDate?: string | number | Date;
  departure?: string;
  destination?: string;
}

type BoundType =
  | 'outbound'
  | 'inbound';

  type FareItem = {
    fareSellKey: string;
    price: number;
    bundle: 'basic' | 'standard' | 'plus'
  }

  type FlightTickets = {
    carrierCode: string;
    flightNumber: string;
    remainingTickets: number;
    departure: string;
    arrival: string;
    fares: FareItem[]
  }

export default class BoundBox extends React.Component<BoundBoxProps> {
  state = {
    boundDate: this.props?.boundDate || '',
  }
  constructor(props: BoundBoxProps) {
    super(props)
  }

  bundlePriceItem = ({price}: FareItem) => (
    <div className={styles.Option_item}>
      <Button text={new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)} variant="outline"></Button>
    </div>
  )

  fareItem = ({departure, arrival, fares}: FlightTickets) => (
    <div className={styles.Option_row}>
      <div className={styles.Option_metadata}>
      {format(new Date(departure), "HH:mm")}
      <SmallArrowSVG />
      {format(new Date(arrival), "HH:mm")}
      </div>

      {fares.map(fare => this.bundlePriceItem(fare))}

    </div>
  )

  searchBox = () => {
    return (
      <div className={styles.SearchBox}>
        <KeyboardDatePicker
          clearable
          autoOk
          value={this.state.boundDate}
          placeholder={this.props.type === 'inbound' ? 'Return' : 'Departure'}
          variant="inline"
          inputVariant="outlined"
          onChange={(date: any) => this.setState({ boundDate: date })}
          minDate={new Date()}
          format="MM/dd/yyyy"
          error={!this.state.boundDate}
          required
        />
        <Button text="Search" variant="primary"></Button>
      </div>
    )
  }

  renderPriceItems = () => {
    return (
      <div className={styles.BoundBox_container}>
        <div className={styles.BoundBox_navigation}>
          <div className={styles.BoundBox_previousdate}>
            <CaretLeftSVG />
            {format(subDays(new Date(this.state.boundDate), 1), "EEE d MMMM")}
          </div>
          <div className={styles.BoundBox_selecteddate}>
            {format(new Date(this.state.boundDate), "EEEE, d MMMM yyyy")}
          </div>
          <div className={styles.BoundBox_nextdate}>
            {format(addDays(new Date(this.state.boundDate), 1), "EEE d MMMM")}
            <CaretRightSVG />
          </div>
        </div>
        <div className="Option__list">
          {this.props.data && this.props.data.map((item: any) => this.fareItem(item))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.BoundBox}>
        <div className={styles.BoundBox_header}>
          <div className={styles.BoundBox_header_direction}>
            <h3 className={styles.BoundBox_header_direction__title}>{this.props.type}</h3>
          </div>
          <div className={styles.BoundBox_header_info}>
            <h3 className={styles.BoundBox_header_info__title}>{this.props.departure}</h3>
            <ArrovSVG className={styles.BoundBox_header_info__arrow} />
            <h3 className={styles.BoundBox_header_info__title}>{this.props.destination}</h3>
          </div>
        </div>
        {this.props?.data && this.renderPriceItems() || this.searchBox()}
      </div>
    )
  }
}
