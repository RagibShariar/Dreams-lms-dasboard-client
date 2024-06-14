import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Checkout = () => {
  // const course = useLoaderData();
  // console.log(course)
  const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // const [cart, refetch] = useCart();
    const navigate = useNavigate();

    // const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  // const totalPrice = course.price;
  // console.log(totalPrice)

    // useEffect(() => {
    //     if (totalPrice > 0) {
    //         axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //             .then(res => {
    //                 console.log(res.data.clientSecret);
    //                 setClientSecret(res.data.clientSecret);
    //             })
    //     }

    // }, [axiosSecure, totalPrice])


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
  })

  if (error) {
      console.log('payment error', error);
      setError(error.message);
  }
  else {
      console.log('payment method', paymentMethod)
      setError('');
  }

 

  };

  return (
    <div className="max-w-5xl my-12 mx-auto ">
      <div>Checkout your payment</div>

      <div>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '25px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button className="btn w-full my-4" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
      </div>
    </div>


  );
};

export default Checkout;
