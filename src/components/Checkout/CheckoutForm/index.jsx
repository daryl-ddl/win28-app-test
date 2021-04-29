import React from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);
    const { source, error } = await stripe.createSource(cardElement, { 
      type: 'card', 
      amount: 300, 
      currency: 'MYR', 
      owner: {
        email: '96608646@win28.com.my'
      }
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[source]', source);
      
      axios.post(process.env.REACT_APP_WP_API_URL + 'custom/v1/checkout', {
        user_id: 30,
        product_id: 109,
        stripe_source: source.id,
        payment_method: 'stripe',
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          hidePostalCode: true, // We'll be sending up the postal ourselves
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;