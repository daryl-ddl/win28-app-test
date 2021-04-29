import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm/index.jsx';

const stripePromise = loadStripe('pk_test_WVaHIhKP7HFfjgLiNXGqfWyY');

const Checkout = () => {
  return (
    <>
      <h1>Checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default Checkout;