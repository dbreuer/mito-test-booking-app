import {
  ADD_ORIGIN,
  ADD_DESTINATION,
  ADD_DEPARTURE_DATE,
  REMOVE_DEPARTURE_DATE,
  ADD_RETURN_DATE,
  REMOVE_RETURN_DATE,
  ADD_INBOUND_FLIGHT,
  ADD_OUTBOUND_FLIGHT,
  REMOVE_INBOUND_FLIGHT,
  REMOVE_OUTBOUND_FLIGHT,
  RESET_FLIGHTS,
} from "./type";

export const addOrigin = (location: any) => (dispatch: any) => {
  return dispatch({
    type: ADD_ORIGIN,
    payload: location,
  });
};

export const addDestination = (location: any) => (dispatch: any) => {
  return dispatch({
    type: ADD_DESTINATION,
    payload: location,
  });
};

export const addDepartureDate = (date: string) => (dispatch: any) => {
  return dispatch({
    type: ADD_DEPARTURE_DATE,
    payload: date,
  });
};

export const removeDepartureDate = () => (dispatch: any) => {
  return dispatch({
    type: REMOVE_DEPARTURE_DATE,
  });
};

export const addReturnDate = (date: string) => (dispatch: any) => {
  return dispatch({
    type: ADD_RETURN_DATE,
    payload: date,
  });
};

export const removeReturnDate = () => (dispatch: any) => {
  return dispatch({
    type: REMOVE_RETURN_DATE,
  });
};

export const addInboundFlight = (flight: any) => (dispatch: any) => {
  return dispatch({
    type: ADD_INBOUND_FLIGHT,
    payload: flight,
  });
};

export const removeInboundFlight = (flight: any) => (dispatch: any) => {
  return dispatch({
    type: REMOVE_INBOUND_FLIGHT,
    payload: flight,
  });
};

export const addOutboundFlight = (flight: any) => (dispatch: any) => {
  return dispatch({
    type: ADD_OUTBOUND_FLIGHT,
    payload: flight,
  });
};

export const removeOutboundFlight = (flight: any) => (dispatch: any) => {
  return dispatch({
    type: REMOVE_OUTBOUND_FLIGHT,
    payload: flight,
  });
};

export const resetBooking = () => (dispatch: any) => {
  return dispatch({
    type: RESET_FLIGHTS,
  });
};
