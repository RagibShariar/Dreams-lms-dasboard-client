import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../Checkout/Checkout";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);

  return (
    <>
      <div>
        <div>
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
