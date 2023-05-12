import React from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
//IT21013300
const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  return (
<form>
    
<label htmlFor="card-element">Card</label>
                <CardElement id="card-element" />
                </form>
  )
}
export default CheckOutForm;