import React, { useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { KeyboardDatePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Button from "../Button/Button"
import Header from "../Header/Header"

import styles from './DialogBox.module.scss'

const colourOptions = [
  {
    label: 'Red',
    value: 'red'
  }
]

export default function DialogBox() {
  const [departureDate, setDepartureDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);
  const [stations, setStations] = React.useState([]);


  const handleDepartureInput = () => {

  }

  const handleDestinationInput = () => {

  }

  useEffect(() => {
    const fetchStations = async () => {
      const stationsResponse: any = await axios('https://mock-air.herokuapp.com/asset/stations').then((response: any) => response.data);
      if (stationsResponse) {
        const mappedStations: any = stationsResponse.map((item: any) => ({ label: item.shortName, value: item.iata }));
        setStations(mappedStations);
      }
    }
    fetchStations();
  }, [])

  return (
    <div className={styles.container}>
      <Header title="Mito Aitline" />
      <div className={styles.grid}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Autocomplete
              freeSolo
              id="free-solo-demo"
              disableClearable
              options={stations.map((option: any) => option.label)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Origin"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
          </div>
          <div className={styles.col}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={stations.map((option: any) => option.label)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Destination"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <KeyboardDatePicker
              clearable
              autoOk
              value={departureDate}
              placeholder="Departure"
              variant="inline"
              inputVariant="outlined"
              onChange={(date: any) => setDepartureDate(date)}
              minDate={new Date()}
              format="MM/dd/yyyy"
              error={!departureDate}
              required
            />
          </div>
          <div className={styles.col}>
            <KeyboardDatePicker
              clearable
              autoOk
              value={returnDate}
              placeholder="Return"
              variant="inline"
              inputVariant="outlined"
              onChange={(date: any) => setReturnDate(date)}
              minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colCenter}>
            <Button text="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}
