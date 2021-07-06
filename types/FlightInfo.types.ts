export type FlightInfoProps = {
  secondary?: boolean;
  departure: string;
  arrival: string;
  origin: {
    shortName: string;
  };
  destination: {
    shortName: string;
  }
}
