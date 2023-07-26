import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51NPdbOSDpDdowsWd3EBuyb5pCPpujk8Fdj3ZLfPVodbY8XOcEHSx5s7XCT1vGLLsDMfSPqkS8MQTbREHMT1pezvE00hCBPbQp5";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

 
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          //sending request to backend using axios with token id and amount as $20
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history("/success ");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please Wait...</span>
      ) : (
        <StripeCheckout 
          name="FAZ"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1h4J7nBbqeaBUY9emjXqScfoi0IAk_NJpzwizYuAVRpiPKIncISrBk9K58HLOxeB3TBk&usqp=CAU"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000} //based on cents
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
