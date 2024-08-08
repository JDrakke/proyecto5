import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: "USD",
                value: "0.01", // Adjust the value as needed
              },
            }],
          });
        }}
        onApprove={async (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }}
      />
    </div>
  );
};

export default Checkout;
