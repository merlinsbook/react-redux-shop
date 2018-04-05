import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

// internal imports
import { STRIPE_API_KEY } from '../../config/lib';

export const CheckoutForm = ({}) => {
  
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  return (
    <StripeCheckout
      name="Payment"
      description="Vegetables" 
      ComponentClass="div"
      panelLabel="Give Money" 
      amount={1000000} // cents
      currency="USD"
      stripeKey={STRIPE_API_KEY}
      locale="de"
      email="powerfood@abc.io"
      shippingAddress
      billingAddress={true}
      zipCode={false}
      bitcoin 
      allowRememberMe 
      token={onToken} 
      reconfigureOnUpdate={false}
      >
    </StripeCheckout>
  )
}