
import { useEffect, useState } from "react"
import axios from 'axios'

interface FareQuery {
  departureStation: string;
  arrivalStation: string;
  date: string | number | Date;
}

export function useFares({departureStation, arrivalStation, date}: FareQuery) {
  const [isLoading, setIsLoading] = useState(false);
  const [fares, setFares] = useState([]);

  useEffect(() => {

    const fetchFares = async () => {
      const stationsResponse: any = await axios(`https://mock-air.herokuapp.com/search?departureStation=${departureStation}&arrivalStation=${arrivalStation}&date=${date}`).then((response: any) => response.data);
      if (stationsResponse) {
        const mappedStations: any = stationsResponse.map((item: any) => ({ label: item.shortName, value: item.iata, ...item }));
        setFares(mappedStations);
        setIsLoading(false);
      }
    }
    if (departureStation && arrivalStation && date) {
      console.log('date', departureStation, arrivalStation, date);
      setIsLoading(true);
      fetchFares();
    }
  }, [departureStation, arrivalStation, date])
  return {
    fares,
    isLoading
  };
}
