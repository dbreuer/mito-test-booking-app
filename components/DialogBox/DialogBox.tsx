import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useRouter } from "next/router"
import { format, addDays } from "date-fns"
import { KeyboardDatePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Button from "../Button/Button"
import Header from "../Header/Header"

import { resetFlights, removeDestination } from '../../store/booking/action';
import {
  addOrigin,
  addDestination,
  addDepartureDate,
  removeDepartureDate,
  addReturnDate,
  removeReturnDate,
} from '../../store/booking/action';

import styles from './DialogBox.module.scss'
import { DialogBoxProps, FieldError, initialFieldErrors} from '../../types';

export default function DialogBox({stations}: DialogBoxProps) {
  const router = useRouter();
  // const {isLoading, stations} = useStations();
  const booking = useSelector((state: any) => state.booking.booking);
  const dispatch = useDispatch()

  const [availableDestinations, setAvailableDestinations] = React.useState([]);
  const [errors, setErrors] = React.useState<FieldError>(initialFieldErrors);


  const handleDepartureInput = (e: any, option: any) => {
    dispatch(addOrigin(option));
    dispatch(removeDestination())
  }

  const handleDestinationInput = (e: any, option: any) => {
    dispatch(addDestination(option))
  }

  const handleDepartureDateInput = (date: string) => {
    (date) ?
    dispatch(addDepartureDate(format(new Date(date), "yyyy-MM-dd"))) :
    dispatch(removeDepartureDate())
  }

  const handleReturnDateInput = (date: string) => {
    (date) ?
    dispatch(addReturnDate(format(new Date(date), "yyyy-MM-dd"))) :
    dispatch(removeReturnDate())
  }

  const fromValidationHandler = () => {
    let formIsValid = true;
    let tempErrors: any = {};
    const { origin, destination, departure, returnDate } = booking;
    //Origin validation
    if (!origin){
       formIsValid = false;
       tempErrors.origin = "Please select departure";
    } else {
      tempErrors.origin = null;
    }

    if (!destination){
      formIsValid = false;
      tempErrors.destination = "Please select destination";
    } else {
      tempErrors.destination = null;
    }

    if (!departure){
      formIsValid = false;
      tempErrors.departureDate = "Please select departure date";
    } else {
      tempErrors.departureDate = null;
    }
    setErrors(tempErrors);
    return formIsValid;
  }

  const searchFlight = (event: Event) => {
    event.preventDefault();
    if (fromValidationHandler()) {
      const { origin, destination, departure, returnDate } = booking;
      dispatch(resetFlights());

      router.push({
        pathname: '/select-flight',
        query: {
          departure,
          return: returnDate,
          origin: origin?.value,
          destination: destination?.value,
        },
      })
    }
  }

  useEffect(()=> {
    const fectDestionationLocations = () => {
      const connections = booking?.origin.connections.map((item: any) => item.iata);
      const filteredStations: any = stations.filter((item: any) => connections.includes(item.iata));
      setAvailableDestinations(filteredStations)
    }
    if (stations && booking?.origin) {
      fectDestionationLocations();
    }
  }, [stations, booking])

  // if (isLoading) {
  //   return (
  //     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 28}}>Loading ...</div>
  //   )
  // }


  return (
    <div className={styles.container}>
      <Header title="Mito Aitline" />
      <form className={styles.grid} onSubmit={(e: any) => searchFlight(e)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Autocomplete
              freeSolo
              disableClearable
              id="origin-airports"
              onChange={handleDepartureInput}
              options={stations}
              value={booking?.origin}
              getOptionLabel={(option: any) => `${option.label} (${option.iata})`}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Origin"
                  margin="normal"
                  error={!!errors.origin}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
            <small key={errors?.origin} className={styles.errorMessage}>{errors?.origin}</small>
          </div>
          <div className={styles.col}>
            <Autocomplete
              freeSolo
              disableClearable
              id="destionation-airports"
              disabled={!booking?.origin && !availableDestinations}
              onChange={handleDestinationInput}
              options={availableDestinations}
              value={booking?.destination}
              getOptionLabel={(option: any) => `${option.label} (${option.iata})`}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Destination"
                  margin="normal"
                  style={{
                    borderColor: 'pink',
                  }}
                  error={!!errors.destination}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />
            <small className={styles.errorMessage}>{errors?.destination}</small>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <KeyboardDatePicker
              autoOk
              id="departure-date-input"
              value={booking.departure}
              placeholder="Departure"
              variant="inline"
              inputVariant="outlined"
              onChange={(date: any) => handleDepartureDateInput(date)}
              minDate={new Date()}
              format="MM/dd/yyyy"
              error={!!errors.departureDate}
            />
            <small className={styles.errorMessage}>{errors?.departureDate}</small>
          </div>
          <div className={styles.col}>
            <KeyboardDatePicker
              autoOk
              id="return-date-input"
              value={booking?.returnDate}
              placeholder="Return"
              inputVariant="outlined"
              onChange={(date: any) => handleReturnDateInput(date)}
              minDate={addDays(new Date(booking.departure || ''), 1)}
              format="MM/dd/yyyy"
              error={!!errors.returnDate}
            />
            <small className={styles.errorMessage}>{errors?.returnDate}</small>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colCenter}>
            <Button id="search-flight-button" text="Search" variant="primary" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
