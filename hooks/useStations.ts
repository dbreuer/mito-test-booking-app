
import { useEffect, useState } from "react"
import axios from 'axios'

export function useStations() {
  const [stations, setStations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchStations = async () => {
      const stationsResponse: any = await axios(`${process.env.NEXT_PUBLIC_PUBLIC_API_URL}/asset/stations`).then((response: any) => response.data);
      if (stationsResponse) {
        const mappedStations: any = stationsResponse.map((item: any) => ({ label: item.shortName, value: item.iata, ...item }));
        setStations(mappedStations);
        setIsLoading(false);
      }
    }
    fetchStations();
  }, [])
  return {
    isLoading,
    stations
  };
}
