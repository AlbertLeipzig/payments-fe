import { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

export const Checkout = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  const onCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCurrency(value);
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '8.99',
            currency: currency,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return (
    <div className="checkout">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <select value={currency} onChange={onCurrencyChange}>
            <option value="USD">$</option>
            <option value="EUR">€</option>
          </select>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
            className='checkout__buttons'
          />
        </>
      )}
    </div>
  );
};
