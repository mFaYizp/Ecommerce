const router = require("express").Router();
const stripe = require("stripe")("sk_test_51NPdbOSDpDdowsWdGjBY4ZGKEWKx09BdfHCx8Jrucxyt64W42DDTnutVDoZkolxiOUI8wJtihl2UMfjwP3copGKg00BHtKEfgt");

router.post("/payment", (req, res) => {
  stripe.paymentIntents.create(
    {
      amount: req.body.amount,
      currency: "inr",
      description: "Test Payment 3",
      confirm: true,
      payment_method_data: {
        type: "card",
        card: {
          token: req.body.tokenId,
        },
      },
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
