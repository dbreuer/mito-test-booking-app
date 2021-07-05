import React, { useEffect } from 'react'
import { useRouter } from "next/router"

import { KeyboardDatePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { format, addDays } from "date-fns"
import { useSelector, useDispatch } from 'react-redux'

import Button from "../Button/Button"
import Header from "../Header/Header"

import styles from './DialogBox.module.scss'
import { useStations } from '../../hooks/useStations';
import {
  addOrigin,
  addDestination,
  addDepartureDate,
  removeDepartureDate,
  addReturnDate,
  removeReturnDate,
  resetBooking,
 } from '../../store/booking/action';

interface FieldError {
  origin: string | null;
  destination: string | null;
  departureDate: string | null;
  returnDate: string | null;
}

const initialFieldErrors = {
  origin: null,
  destination: null,
  departureDate: null,
  returnDate: null,
}

export default function DialogBox() {
  const router = useRouter();
  const stations = useStations();
  const booking = useSelector((state: any) => state.booking.booking);
  const dispatch = useDispatch()

  const [availableDestinations, setAvailableDestinations] = React.useState([]);
  const [errors, setErrors] = React.useState<FieldError>(initialFieldErrors);


  const handleDepartureInput = (e: any, option: any) => {
    dispatch(addOrigin(option));
    if (booking?.origin) {
      const connections = option.connections.map((item: any) => item.iata);
      const filteredStations = stations.filter((item: any) => connections.includes(item.iata));
      setAvailableDestinations(filteredStations)
    }
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

  const fromValidationHandler = async () => {
    let formIsValid = true;
    let tempErrors: FieldError = errors;
    //Origin validation
    const { origin, destination, departure, returnDate } = booking;
    if(!origin){
       formIsValid = false;
       tempErrors.origin = "Please select departure";
    } else {
      tempErrors.origin = null;
    }

    if(!destination){
      formIsValid = false;
      tempErrors.destination = "Please select destination";
    } else {
      tempErrors.destination = null;
    }

    if(!departure){
      formIsValid = false;
      tempErrors.departureDate = "Please select departure date";
    } else {
      tempErrors.departureDate = null;
    }

    await setErrors(tempErrors);
    return formIsValid;
  }

  const searchFlight = (event: Event) => {
    event.preventDefault();
    if (fromValidationHandler()) {
      const { origin, destination, departure, returnDate } = booking;
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

  // useEffect(()=> {
  //   dispatch(resetBooking());
  // }, [])

  if (stations === null) {
    return (
      'Loading ...'
    )
  }


  return (
    <div className={styles.container}>
      <Header title="Mito Aitline" />
      <form className={styles.grid} onSubmit={(e: any) => searchFlight(e)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Autocomplete
              freeSolo
              id="free-solo-demo"
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
            <small className={styles.errorMessage}>{errors?.origin}</small>
          </div>
          <div className={styles.col}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disabled={!booking?.origin}
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
              value={booking.departure}
              placeholder="Departure"
              variant="inline"
              inputVariant="outlined"
              onChange={(date: any) => handleDepartureDateInput(date)}
              minDate={new Date()}
              format="MM/dd/yyyy"
              error={!!errors.departureDate}
            />
            <small className={styles.errorMessage}>{errors.departureDate && errors.departureDate}</small>
          </div>
          <div className={styles.col}>
            <KeyboardDatePicker
              autoOk
              value={booking?.returnDate}
              placeholder="Return"
              inputVariant="outlined"
              onChange={(date: any) => handleReturnDateInput(date)}
              minDate={addDays(new Date(booking.departure || ''), 1)}
              format="MM/dd/yyyy"
              error={!!errors.returnDate}
            />
            <small className={styles.errorMessage}>{errors.departureDate && errors.departureDate}</small>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colCenter}>
            <Button text="Search" variant="primary" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
