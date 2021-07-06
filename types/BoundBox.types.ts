export type BoundBoxProps = {
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

export type BoundType =
  | 'outbound'
  | 'inbound';

export type FareItem = {
  fareSellKey: string;
  price: number;
  bundle: 'basic' | 'standard' | 'plus',
  isFirst?: boolean;
  onAddTicket?: any;
  active?: boolean;
  noTicket?: boolean;
}

export type FlightTickets = {
  carrierCode: string;
  flightNumber: string;
  remainingTickets: number;
  departure: string;
  arrival: string;
  fares: FareItem[]
}
