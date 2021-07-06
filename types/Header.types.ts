export type HeaderProps = {
  title?: string;
  departure?: {
    shortName: string;
    iata: string;
  };
  destination?: {
    shortName: string;
    iata: string;
  };
}
