import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey =
    "pk_test_51IefpTJjvWAaffYDuUcjsMp7mEBNSpNrrFuhLDwcGWaLubdkX6Wr20ACVZsc2VSAkyDFuiNZ76fJsZ00YrQ7s0Om00wm7TmaQ6";

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckoutButton;
