import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

export function useSummary() {
  const booking = useSelector((state: any) => state.booking.booking);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCost, setTotalCost] = useState(formatCurrency(0));

  useEffect(() => {
    setIsLoading(true);
    const calculateCost = async () => {
      const inboundPrice = booking?.inbound?.price || 0;
      const outboundPrice = booking?.outbound?.price || 0;
      const total = Math.max(inboundPrice + outboundPrice, 0);
      setTotalCost(formatCurrency(total));
      setIsLoading(false);
    }
    calculateCost();
  }, [booking])

  return {
    isLoading,
    totalCost,
  }
}
