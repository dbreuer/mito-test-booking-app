export type DialogBoxProps = {
  stations: any[]
}

export interface FieldError {
 origin: string | null;
 destination: string | null;
 departureDate: string | null;
 returnDate: string | null;
}

export const initialFieldErrors = {
 origin: null,
 destination: null,
 departureDate: null,
 returnDate: null,
}
