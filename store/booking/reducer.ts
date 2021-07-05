import {
  ADD_ORIGIN,
  ADD_DESTINATION,
  REMOVE_DESTINATION,
  ADD_DEPARTURE_DATE,
  REMOVE_DEPARTURE_DATE,
  ADD_RETURN_DATE,
  REMOVE_RETURN_DATE,
  ADD_INBOUND_FLIGHT,
  REMOVE_INBOUND_FLIGHT,
  ADD_OUTBOUND_FLIGHT,
  REMOVE_OUTBOUND_FLIGHT,
  RESET_FLIGHTS,
  RESET_BOOKING,
  GET_FLIGHTS,
  CHECKOUT_FLIGHTS,
  CANCEL_CHECKOUT_FLIGHTS,
} from "./type";

const initialState = {
  server: "",
  client: "",
  booking: {
    origin: null,
    destination: null,
    departure: null,
    returnDate: null,
    inbound: null,
    outbound: null,
    total: 0,
    ready: false,
    checkoutAt: null,
  },
};

// Creating my reducer
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_FLIGHTS:
        return { ...state };
    case ADD_ORIGIN:
        return { ...state, booking: { ...state.booking, origin: action.payload} };
    case ADD_DESTINATION:
        return { ...state, booking: { ...state.booking, destination: action.payload} };
    case REMOVE_DESTINATION:
        return { ...state, booking: { ...state.booking, destination: null } };
    case ADD_DEPARTURE_DATE:
      return { ...state, booking: { ...state.booking, departure: action.payload} };
    case REMOVE_DEPARTURE_DATE:
        return { ...state, booking: { ...state.booking, departure: null } };
    case ADD_RETURN_DATE:
      return { ...state, booking: { ...state.booking, returnDate: action.payload} };
    case REMOVE_RETURN_DATE:
      return { ...state, booking: { ...state.booking, returnDate: null } };
    case ADD_INBOUND_FLIGHT:
        return { ...state, booking: { ...state.booking, inbound: action.payload} };
    case REMOVE_INBOUND_FLIGHT:
        return { ...state, booking: { ...state.booking, inbound: initialState.booking.inbound} };
    case ADD_OUTBOUND_FLIGHT:
        return { ...state, booking: { ...state.booking, outbound: action.payload, total: state.booking.total + action.payload.price} };
    case REMOVE_OUTBOUND_FLIGHT:
        return { ...state, booking: { ...state.booking, outbound: initialState.booking.inbound} };
    case RESET_FLIGHTS:
        return { ...state, booking: {...state.booking, inbound: null, outbound: null, total: 0} };
    case RESET_BOOKING:
          return { ...state, booking: initialState.booking };
    case CHECKOUT_FLIGHTS:
          return { ...state, booking: {...state.booking, ready: true, checkoutAt: action.payload }};
    case CANCEL_CHECKOUT_FLIGHTS:
          return { ...state, booking: {...state.booking, ready: false, checkoutAt: null }};
    default:
      return state;
  }
}
