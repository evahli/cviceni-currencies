import './style.css';
import { useEffect, useState  } from 'react';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

export const Rate = ({ from }) => {
  //const rate = from && currencies[from] ? currencies[from].CZK : 0;
  const [rate, setRate] = useState('')
  useEffect(() => {
    const fetchCurrency = async () => {
      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${from}&to=CZK`,
      );
      const responseData = await response.json();
      setRate(responseData.rates.CZK)
      console.log(responseData.rates.CZK)
    };
      fetchCurrency()
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};
