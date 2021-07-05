
import { useEffect, useState } from "react"
import axios from 'axios'

export function useStations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      const stationsResponse: any = await axios('https://mock-air.herokuapp.com/asset/stations').then((response: any) => response.data);
      if (stationsResponse) {
        const mappedStations: any = stationsResponse.map((item: any) => ({ label: item.shortName, value: item.iata, ...item }));
        setStations(mappedStations);
      }
    }
    fetchStations();
  }, [])
  return stations;
}
